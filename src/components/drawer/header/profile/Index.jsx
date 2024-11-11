import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import * as React from "react";
import { ReactComponent as DropdownArrow } from "../../../../assets/icons/dropdownArrow.svg";
import { ReactComponent as ProfileIcon } from "../../../../assets/icons/profileIcon.svg";
import { ReactComponent as SettingIcon } from "../../../../assets/icons/settingIcon.svg";
import { ReactComponent as SignOutIcon } from "../../../../assets/icons/signOutIcon.svg";
import ProfilePic from "../../../../assets/images/profilePic.png";
import { useNavigate } from "react-router-dom";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "rgb(55, 65, 81)",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
    ...theme.applyStyles("dark", {
      color: theme.palette.grey[300],
    }),
  },
}));

export default function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    localStorage.removeItem("token")
    navigate("/login")
  };

  return (
    <div>
      <div
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        className="cursor-pointer"
      >
        <div class="flex items-center gap-4 max-sm:justify-end">
          <img class="w-[50px] h-[50px] rounded-full" src={ProfilePic} alt="" />
          <div class="font-medium max-sm:hidden" style={{ lineHeight: "20px" }}>
            <p className="text-[#D8942E] font-medium ">Anthony Jenkins</p>
            <p class="text-sm text-[#17263A] text-left  ">Super Admin</p>
          </div>

          <div className="max-sm:hidden">
            <DropdownArrow width={"15"} />
          </div>
        </div>
      </div>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleClose}
          disableRipple
          className="gap-[10px]"
          sx={{
            "&:hover": {
              color: "#D8942E", // Change text color on hover
              "& .MuiSvgIcon-root": {
                color: "#D8942E", // Change icon color on hover
              },
            },
          }}
        >
          <ProfileIcon width={"17"} />
          My Profile
        </MenuItem>

        <MenuItem
          onClick={handleClose}
          disableRipple
          className="gap-[10px]"
          sx={{
            "&:hover": {
              color: "#D8942E", // Change text color on hover
              "& .MuiSvgIcon-root": {
                color: "#D8942E", // Change icon color on hover
              },
            },
          }}
        >
          <SettingIcon width={"17"} />
          Setting
        </MenuItem>

        <MenuItem
          onClick={handleClose}
          disableRipple
          className="gap-[10px]"
          sx={{
            "&:hover": {
              color: "#D8942E", // Change text color on hover
              "& .MuiSvgIcon-root": {
                color: "#D8942E", // Change icon color on hover
              },
            },
          }}
        >
          <SignOutIcon width={"17"} />
          Sign Out
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
