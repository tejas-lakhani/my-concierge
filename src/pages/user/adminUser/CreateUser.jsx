import { Box, Button, FormControlLabel, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomSwitch from "../../../components/common/CustomSwitch";
import { createUser } from "../../../redux/slices/userSlice";
import PhoneInput, { formatPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { getCountryCallingCode } from "react-phone-number-input";

const CreateUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [selectCountry, setSelectCountry] = useState("IN");

  // Initialize React Hook Form
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      role: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    const { name, email, phone, role, password } = data;

    const formatNumber = formatPhoneNumber(phone);
    const dial = getCountryCallingCode(selectCountry);

    try {
      const response = await dispatch(
        createUser({
          name,
          email,
          phone: formatNumber,
          dial: `+${dial}`,
          role,
          password,
        })
      ).unwrap();

      console.log("returnedData: ", response);
      toast.success("User created successfully!"); // Updated success message
      navigate("/admin-user"); // Assuming the user list page is /user
    } catch (error) {
      console.log("error: ", error);
      toast.error("Failed to create user. Please try again."); // Updated failure message
    }
  };

  return (
    <form
      className="bg-white py-4 px-[20px] sm:px-[70px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Create User</h1>{" "}
        {/* Changed to User */}
      </div>
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        justifyContent="start"
        gap={isMobile ? "20px" : "50px"}
        maxWidth={"1400px"}
      >
        {/* Left Section: Form */}
        <Box
          display="flex"
          flexDirection="column"
          flex={1}
          sx={{
            maxWidth: isMobile ? "100%" : "75%",
            boxShadow: "0px 4px 8px 0px #00000026",
            padding: { xs: "15px", sm: "30px" },
            borderRadius: "20px",
          }}
        >
          <Grid container spacing={2}>
            {/* Name Input */}
            <Grid item xs={12} md={6}>
              <label className="block text-[17px] font-medium text-gray-700 pb-2">
                Name<span className="text-red-500">*</span>
              </label>
              <Controller
                name="name"
                control={control}
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="mt-1 block w-full rounded-md p-3"
                    placeholder="Sahil"
                    style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
                  />
                )}
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </Grid>

            {/* Email Input */}
            <Grid item xs={12} md={6}>
              <label className="block text-[17px] font-medium text-gray-700 pb-2">
                Email<span className="text-red-500">*</span>
              </label>
              <Controller
                name="email"
                control={control}
                rules={{ required: "Email is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="email"
                    className="mt-1 block w-full rounded-md p-3"
                    placeholder="sa@gmail.com"
                    style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
                  />
                )}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </Grid>

            {/* Phone Input */}
            <Grid item xs={12} md={6}>
              <label className="block text-[17px] font-medium text-gray-700 pb-2">
                Phone<span className="text-red-500">*</span>
              </label>
              <Controller
                name="phone"
                control={control}
                rules={{ required: "Phone number is required" }}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    international
                    defaultCountry="IN"
                    countryCallingCodeEditable={false}
                    className="mt-1 block w-full rounded-md p-3"
                    placeholder="Enter phone number"
                    style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
                    onCountryChange={(v) => setSelectCountry(v)}
                  />
                )}
              />
              {errors.phone && (
                <span className="text-red-500">{errors.phone.message}</span>
              )}
            </Grid>

            {/* <input
                    {...field}
                    type="text"
                    className="mt-1 block w-full rounded-md p-3"
                    placeholder="1234657890"
                    style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
                  /> */}

            {/* Dial Code Input */}

            {/* Role Input */}
            <Grid item xs={12} md={6}>
              <label className="block text-[17px] font-medium text-gray-700 pb-2">
                Role<span className="text-red-500">*</span>
              </label>
              <Controller
                name="role"
                control={control}
                rules={{ required: "Role is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="mt-1 block w-full rounded-md p-3"
                    placeholder="user"
                    style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
                  />
                )}
              />
              {errors.role && (
                <span className="text-red-500">{errors.role.message}</span>
              )}
            </Grid>

            {/* Password Input */}
            <Grid item xs={12} md={6}>
              <label className="block text-[17px] font-medium text-gray-700 pb-2">
                Password<span className="text-red-500">*</span>
              </label>
              <Controller
                name="password"
                control={control}
                rules={{ required: "Password is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="password"
                    className="mt-1 block w-full rounded-md p-3"
                    placeholder="123"
                    style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
                  />
                )}
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          margin: "16px",
          justifyContent: "start",
          mt: 4,
          gap: "20px",
        }}
        className="max-sm:flex-col"
      >
        <Button
          variant="contained"
          sx={{
            background: "#ffffff",
            boxShadow:
              "6.22px 6.22px 15px 0px #0000001A,-6.22px -6.22px 15px 0px #F9FCFF",
            padding: "7px 20px",
            color: "#454545",
            textTransform: "unset",
          }}
          className="max-sm:w-full"
          onClick={() => navigate("/admin-user")}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          variant="contained"
          sx={{
            background:
              " linear-gradient(95.02deg, #565C62 7.02%, #243040 95.7%)",
            boxShadow:
              "8px 8px 12.8px 0px #FFFFFF1A inset, -8px -8px 12.8px 0px #0000004D inset, 0px 3.46px 3.46px 0px #00000040 inset",
            padding: "7px 20px",
            textTransform: "unset",
          }}
          className="max-sm:w-full"
        >
          Create User
        </Button>
      </Box>
    </form>
  );
};

export default CreateUser;