import React, { useState } from "react";
import banner from "../../../assets/images/profileBanner.png";
import profileImage from "../../../assets/images/profilePic.png";
import { Avatar, Box, Tab, Tabs } from "@mui/material";
import ProfileSetting from "./components/ProfileSetting";
import ChangePassword from "./components/ChangePassword";
import useWindowWidth from "../../../customHooks/useWindowWidth";

const Profile = () => {
  const windowWidth = useWindowWidth();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-full">
          <img
            src={banner}
            alt="Abstract blue and green background"
            className="w-full h-[250px] object-cover"
          />
        </div>
        <div className="relative w-full pl-[20px] md:pl-[80px]">
          <div className="absolute -top-8  flex items-center">
            <Avatar
              alt="Remy Sharp"
              src={profileImage}
              sx={{ width: "110px", height: "110px" }}
            />
            <div className="mt-4">
              <h1 className="font-semibold">Anthony Jenkins</h1>
              <p className="text-gray-600">anthonyjenkins@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[20px] md:px-[80px] py-[50px]">
        <Box sx={{ width: "100%", mt: 5 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Settings Tabs"
            indicatorColor="primary" // Customize tab underline color
            textColor="inherit"
            variant="fullWidth" // Adjust layout to full width
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              "& .MuiTabs-indicator": {
                backgroundColor: "#ff9800", // Customize the active tab indicator color
              },
              overflow: "auto",
              maxWidth: { xs: `${windowWidth - 60}px`, sm: "auto" },
            }}
          >
            <Tab
              label="Profile"
              sx={{
                textTransform: "unset",
                fontSize: "16px",
                maxWidth: "max-content",
              }}
            />
            <Tab
              label="Password"
              sx={{
                textTransform: "unset",
                fontSize: "16px",
                maxWidth: "max-content",
              }}
            />
            <Tab
              label="Plan"
              sx={{
                textTransform: "unset",
                fontSize: "16px",
                maxWidth: "max-content",
              }}
            />
            <Tab
              label="Email"
              sx={{
                textTransform: "unset",
                fontSize: "16px",
                maxWidth: "max-content",
              }}
            />
            <Tab
              label="Notification"
              sx={{
                textTransform: "unset",
                fontSize: "16px",
                maxWidth: "max-content",
              }}
            />
          </Tabs>
          {/* Conditional Rendering for each Tab's content */}
          <div className="">
            {value === 0 && <div>{<ProfileSetting />}</div>}
            {value === 1 && <div>{<ChangePassword />}</div>}
            {value === 2 && <div>Plan Content</div>}
            {value === 3 && <div>Email Content</div>}
            {value === 4 && <div>Notification Content</div>}
            {value === 5 && <div>Notification Content</div>}
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Profile;
