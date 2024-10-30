import { Box, Grid, Button } from "@mui/material";
import { useState } from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const ChangePassword = () => {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChange = (e) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className=" border-b border-[#e5e7eb] py-[20px]">
        <p className="text-[#D8942E] text-[20px]  font-medium ">
          Change Password
        </p>

        <p>Please enter your to password to change your current password ---</p>
      </div>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        flex={1}
        maxWidth={"900px"}
        pt={2}
      >
        <div>
          {/* Current Password */}
          <div className="w-full mt-[20px] flex md:items-center max-md:flex-col">
            <label className="block text-[16px] text-gray-700 max-md:pb-2 min-w-[250px]">
              Current Password<span className="text-red-500"> *</span>
            </label>
            <input
              type="password"
              name="currentPassword"
              value={passwords.currentPassword}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md shadow-sm p-3"
              required
              style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
            />
          </div>

          {/* New Password */}
          <div className="w-full mt-[20px] flex md:items-center max-md:flex-col">
            <label className="block text-[16px] text-gray-700 max-md:pb-2 min-w-[250px]">
              New Password<span className="text-red-500"> *</span>
            </label>
            <input
              type="password"
              name="newPassword"
              value={passwords.newPassword}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md shadow-sm p-3"
              required
              style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
            />
          </div>

          {/* Confirm New Password */}
          <div className="w-full mt-[20px] flex md:items-center max-md:flex-col">
            <label className="block text-[16px] text-gray-700 max-md:pb-2 min-w-[250px]">
              Confirm New Password<span className="text-red-500"> *</span>
            </label>
            <input
              type="password"
              name="confirmNewPassword"
              value={passwords.confirmNewPassword}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md shadow-sm p-3"
              required
              style={{ boxShadow: "0px 4px 8px 0px #00000026" }}
            />
          </div>
        </div>

        <Box className="flex sm:items-center sm:justify-end max-sm:flex-col max-sm:gap-7 my-[30px]">
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
              className="max-sm:w-full"
            >
              Update
            </Button>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default ChangePassword;
