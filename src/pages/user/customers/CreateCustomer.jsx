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
import React, { useState } from "react";
import CustomSwitch from "../../../components/common/CustomSwitch";

const CreateCustomer = () => {
  const [visible, setVisible] = useState(true);
  const [parentCategory, setParentCategory] = useState("");

  // Responsive design breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleVisibilityChange = (event) => {
    setVisible(event.target.checked);
  };

  const handleParentChange = (event) => {
    setParentCategory(event.target.value);
  };

  return (
    <div className="bg-white py-4 px-[20px] sm:px-[70px]">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold"> Create Customer</h1>
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
          component="form"
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
            {/* Name and Slug Inputs */}
            <Grid item xs={12} md={6}>
              <label className="block  text-[17px] font-medium text-gray-700 pb-2">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md shadow-sm p-3"
                placeholder="xtz"
                style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <label className="block  text-[17px] font-medium text-gray-700 pb-2">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md shadow-sm p-3"
                placeholder="xtz"
                style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
                required
              />
            </Grid>

            {/* Parent Category Dropdown */}
            <Grid item xs={12} md={6}>
              <label className="block  text-[17px] font-medium text-gray-700 pb-2">
                Phone<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                className="mt-1 block w-full rounded-md shadow-sm p-3"
                placeholder="xtz"
                style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <label className="block text-[17px] font-medium text-gray-700 pb-2">
                DOB<span className="text-red-500">*</span>
              </label>

              <input
                type="date"
                className="mt-1 block w-full rounded-md shadow-sm p-3"
                placeholder="xyz"
                style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
                required
              />
            </Grid>
          </Grid>
        </Box>

        {/* Right Section: Info Card */}
        {
          <Card
            sx={{
              width: isMobile ? "100%" : "300px",
              marginTop: isMobile ? "20px" : "0",
              boxShadow: "0px 4px 8px 0px #00000026",
              height: "max-content",
              borderRadius: "20px",
            }}
          >
            <CardContent>
              <Typography variant="body1" gutterBottom fontWeight={"500"}>
                Created at
              </Typography>
              <Typography variant="body2" color="textSecondary">
                -
              </Typography>

              <Typography
                variant="body1"
                mt={3}
                gutterBottom
                fontWeight={"500"}
              >
                Last modified at
              </Typography>
              <Typography variant="body2" color="textSecondary">
                -
              </Typography>
            </CardContent>
          </Card>
        }
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
            boxShadow:
              "6.22px 6.22px 15px 0px #0000001A,-6.22px -6.22px 15px 0px #F9FCFF",
            padding: "7px 20px",
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
            padding: "7px 20px",
            textTransform: "unset",
          }}
          className="max-sm:w-full"
        >
          Create Customers
        </Button>
      </Box>
    </div>
  );
};

export default CreateCustomer;
