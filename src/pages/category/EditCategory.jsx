import {
  Box,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import CustomSwitch from "../../components/common/CustomSwitch";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { updateCategory } from "../../redux/slices/categorySlice";
import { useForm, Controller } from "react-hook-form";

const EditCategory = () => {
  const location = useLocation();
  const categoryData = location.state;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Initialize React Hook Form with default values
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: categoryData?.name || "",
      sequence: categoryData?.sequence || "",
      description: categoryData?.description || "",
      isActive: categoryData?.is_active || false,
    },
  });

  const onSubmit = async (data) => {
    if (!data.name || !data.sequence || !data.description) {
      toast.error("All fields are required.");
      return;
    }

    try {
      await dispatch(
        updateCategory({
          uuid: categoryData.uuid,
          name: data.name,
          sequence: parseInt(data.sequence),
          description: data.description,
          is_active: data.isActive,
        })
      ).unwrap();

      toast.success("Category updated successfully!");
      navigate("/category");
    } catch (error) {
      toast.error("Failed to update category. Please try again.");
    }
  };

  return (
    <form
      className="bg-white py-4 px-[20px] sm:px-[70px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Edit Category</h1>
      </div>
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        justifyContent="start"
        gap={isMobile ? "20px" : "50px"}
        maxWidth={"1400px"}
      >
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
            <Grid item xs={12} md={6}>
              <label className="block text-[17px] font-medium text-gray-700 pb-2">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="mt-1 block w-full rounded-md p-3"
                placeholder="Category Name"
                style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <label className="block text-[17px] font-medium text-gray-700 pb-2">
                Sequence<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("sequence", { required: "Sequence is required" })}
                className="mt-1 block w-full rounded-md p-3"
                placeholder="Sequence"
                style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
              />
              {errors.sequence && (
                <p className="text-red-500">{errors.sequence.message}</p>
              )}
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Controller
                    name="isActive"
                    control={control}
                    render={({ field }) => (
                      <CustomSwitch {...field} checked={field.value} />
                    )}
                  />
                }
                label="Visible to customers"
                sx={{ color: "#17263A", fontWeight: "500" }}
              />
            </Grid>
            <Grid item xs={12}>
              <label className="block text-[17px] font-medium text-gray-700 pb-2">
                Description<span className="text-red-500">*</span>
              </label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                className="w-full min-h-[200px] border-none focus:ring-0 p-3"
                style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
              ></textarea>
              {errors.description && (
                <p className="text-red-500">{errors.description.message}</p>
              )}
            </Grid>
          </Grid>
        </Box>

        <Card
          sx={{
            width: isMobile ? "100%" : "300px",
            marginTop: isMobile ? "20px" : "0",
            boxShadow: "0px 4px 8px 0px #00000026",
            borderRadius: "20px",
          }}
        >
          <CardContent>
            <Typography variant="body1" gutterBottom fontWeight={"500"}>
              Created at
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {categoryData?.created_at || "-"}
            </Typography>
            <Typography variant="body1" mt={3} gutterBottom fontWeight={"500"}>
              Last modified at
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {categoryData?.last_modified_at || "-"}
            </Typography>
          </CardContent>
        </Card>
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
        className="max-sm:flex-col "
      >
        <Button
          variant="contained"
          sx={{
            background: "#ffffff",
            padding: "7px 20px",
            color: "#454545",
            textTransform: "unset",
          }}
          onClick={() => navigate("/category")}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          variant="contained"
          sx={{
            background:
              "linear-gradient(95.02deg, #565C62 7.02%, #243040 95.7%)",
            padding: "7px 20px",
            textTransform: "unset",
          }}
        >
          Update Category
        </Button>
      </Box>
    </form>
  );
};

export default EditCategory;
