import React, { useState } from "react";
import {
  Box,
  TextField,
  FormControl,
  MenuItem,
  Button,
  Typography,
  Switch,
  FormControlLabel,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CustomSwitch from "../../components/common/CustomSwitch";

// Custom Rich Text Editor Simulation
const RichTextEditor = (props) => (
  <TextField
    multiline
    fullWidth
    minRows={8}
    variant="outlined"
    {...props}
    sx={{
      "& .MuiInputBase-root": {
        padding: "10px",
        height: "auto",
      },
    }}
  />
);

const CreateCategory = () => {
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
        <h1 className="text-2xl font-semibold"> Create Category</h1>
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
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <label className="block text-[17px] font-medium text-gray-700 pb-2">
                Slug<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md shadow-sm p-3"
                placeholder="xyz"
                style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
              />
            </Grid>

            {/* Parent Category Dropdown */}
            <Grid item xs={12}>
              <label className="block text-[17px] font-medium text-gray-700 pb-2">
                Parent
              </label>
              <select
                className="mt-1 block w-full  rounded-md shadow-sm p-3"
                style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
              >
                <option>Select Parent category</option>
              </select>
            </Grid>

            {/* Switch for Visibility */}
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <CustomSwitch
                    checked={visible}
                    onChange={handleVisibilityChange}
                  />
                }
                label="Visible to customers"
                sx={{ color: "#17263A", fontWeight: "500" }}
              />
            </Grid>

            {/* Description */}
            <Grid item xs={12}>
              <label className="block text-[17px] font-medium text-gray-700 pb-2">
                Description<span className="text-red-500">*</span>
              </label>
              <textarea
                style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
                className="w-full min-h-[200px] border-none focus:ring-0 p-3"
                value="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
              ></textarea>
            </Grid>
          </Grid>

          {/* Action Buttons */}
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
          }}
          className="max-sm:w-full"
        >
          Create Category
        </Button>
      </Box>
    </div>
  );
};

export default CreateCategory;
