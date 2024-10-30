import { Box, Grid, Button } from "@mui/material";
import { useState } from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const ProfileSetting = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    gender: "",
    mobileNumber: "",
    file: null,
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormValues({
      ...formValues,
      file: e.target.files[0],
    });
  };

  return (
    <div>
      <p className="text-[#D8942E] border-b text-[20px] border-[#e5e7eb] font-medium py-[20px]">
        Profile Details
      </p>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        flex={1}
        maxWidth={"1200px"}
        pt={2}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <label className="block text-[15px] text-gray-700 pb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formValues.firstName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md shadow-sm p-3"
              style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <label className="block text-[15px] text-gray-700 pb-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formValues.lastName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md shadow-sm p-3"
              style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <label className="block text-[15px] text-gray-700 pb-1">
              User Name
            </label>
            <input
              type="text"
              name="userName"
              value={formValues.userName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md shadow-sm p-3"
              style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <label className="block text-[15px] text-gray-700 pb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md shadow-sm p-3"
              style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <label className="block text-[15px] text-gray-700 pb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobileNumber"
              value={formValues.mobileNumber}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md shadow-sm p-3"
              style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <label className="block text-[15px] text-gray-700 pb-1">
              Gender
            </label>
            <select
              name="gender"
              value={formValues.gender}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md shadow-sm p-3"
              style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </Grid>
          <Grid item xs={12}>
            {/* <label className="block text-[17px] font-medium text-gray-700 pb-2">
              Upload Image
            </label>
            <div className="file-upload-wrapper">
              <label htmlFor="file-upload" className="custom-file-upload">
                <i className="fa fa-cloud-upload"></i> Choose Image
              </label>
              <input
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                hidden
              />
              <span className="file-name">{formValues.fileName}</span>
            </div>
            <p style={{ color: "gray" }}>
              The file size should not be more than 5MB
            </p> */}
          </Grid>
        </Grid>

        <Box className="flex sm:items-center sm:justify-between max-sm:flex-col max-sm:gap-7">
          <div className="flex flex-col items-start space-y-2  ">
            <label className="block text-[15px] text-gray-700 pb-1">
              Upload Image
            </label>
            <div className="flex items-center space-x-2">
              <label className="flex gap-2 items-center px-6 py-3 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer">
                <FileDownloadIcon />
                <span>Choose Image</span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
              <span className="text-[#868686] text-sm font-medium">
                No File Chosen
              </span>
            </div>
            <p className="text-[14px] text-[#3D3D3D]">
              The file size should not be more than 5MB
            </p>
          </div>
          <div className="flex items-center gap-5">
            <Button
              variant="contained"
              sx={{
                background: "#ffffff",
                boxShadow:
                  "6.22px 6.22px 15px 0px #0000001A,-6.22px -6.22px 15px 0px #F9FCFF",
                padding: "7px 30px",
                color: "#454545",
                textTransform: "unset",
              }}
              className="max-sm:w-full"
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              sx={{
                background:
                  " linear-gradient(95.02deg, #565C62 7.02%, #243040 95.7%)",
                boxShadow:
                  "8px 8px 12.8px 0px #FFFFFF1A inset, -8px -8px 12.8px 0px #0000004D inset, 0px 3.46px 3.46px 0px #00000040 inset",
                padding: "7px 30px",
                textTransform: "unset",
              }}
              className="max-sm:w-full "
            >
              Save
            </Button>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default ProfileSetting;
