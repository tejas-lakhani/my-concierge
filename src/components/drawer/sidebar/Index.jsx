import StarBorder from "@mui/icons-material/StarBorder";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import necessary hooks
import { ReactComponent as DropdownBottomIcon } from "../../../assets/icons/dropdownBottomIcon.svg";
import { ReactComponent as DropdownRightIcon } from "../../../assets/icons/dropdownRightIcon.svg";
import { ReactComponent as Category } from "../../../assets/icons/sidebarIcon/category.svg";
import { ReactComponent as Chat } from "../../../assets/icons/sidebarIcon/chat.svg";
import { ReactComponent as Content } from "../../../assets/icons/sidebarIcon/content.svg";
import { ReactComponent as Dashboard } from "../../../assets/icons/sidebarIcon/dashboard.svg";
import { ReactComponent as Sales } from "../../../assets/icons/sidebarIcon/sales.svg";
import { ReactComponent as Setting } from "../../../assets/icons/sidebarIcon/setting.svg";
import { ReactComponent as UserSetting } from "../../../assets/icons/sidebarIcon/userSetting.svg";
import { ReactComponent as SidebarArrowIcon } from "../../../assets/icons/sidebarIcon/sidebarArrowIcon.svg";

export default function SidebarList() {
  const [open, setOpen] = React.useState(null);
  const navigate = useNavigate(); // Use navigate for programmatic navigation
  const location = useLocation(); // Use location to get current pathname

  const handleClick = (item) => {
    setOpen(open === item ? null : item); // Only expand/collapse, no navigation
  };

  const handleNavigation = (path) => {
    navigate(path); // Navigate when sub-items are clicked
  };

  const getTextColor = (path) => {
    return location.pathname === path ? "#D8942E" : "inherit"; // Match current pathname to highlight
  };

  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper", padding: "0 10px" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {/* Dashboard */}
      <ListItemButton
        sx={{
          py: "12px",
          "&:hover": { color: "#D8942E" },
          color: getTextColor("/dashboard"),
        }}
        onClick={() => handleNavigation("/dashboard")} // Navigate on click
      >
        <ListItemIcon sx={{ minWidth: "42px" }}>
          <Dashboard width={"20"} color="grey" />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>

      {/* User Management */}
      <ListItemButton
        sx={{
          py: "12px",
          "&:hover": { color: "#D8942E" },
          color: getTextColor("/user"),
        }}
        onClick={() => handleClick("user")} // Expand/collapse only
      >
        <ListItemIcon sx={{ minWidth: "42px" }}>
          <UserSetting width={"20"} color="grey" />
        </ListItemIcon>
        <ListItemText primary="User Management" />
        {open === "user" ? (
          <DropdownBottomIcon color="#D8942E" width="12" />
        ) : (
          <DropdownRightIcon color="grey" width="7" />
        )}
      </ListItemButton>
      <Collapse in={open === "user"} timeout="auto" unmountOnExit>
        {/* <List component="div" disablePadding>
          <ListItemButton
            sx={{
              py: "12px",
              pl: 4,
              "&:hover": { color: "#D8942E" },
              color: getTextColor("/user/list"),
            }}
            onClick={() => handleNavigation("/user/list")} // Navigate to user list
          >
            <ListItemIcon sx={{ minWidth: "42px" }}>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="User List" />
          </ListItemButton>
        </List> */}
         <List component="div" disablePadding>
          <ListItemButton
            sx={{
              py: "5px",
              pl: 5,
              "&:hover": { color: "#D8942E" },
              color: getTextColor("/admin-user"),
            }}
            onClick={() => handleNavigation("/admin-user")} // Navigate on sub-item click
          >
            <ListItemIcon sx={{ minWidth: "25px" }}>
              <SidebarArrowIcon width={"12"} />
            </ListItemIcon>
            <ListItemText
              primary="Admin User"
              sx={{ "& .MuiTypography-body1": { fontSize: "15px" } }}
            />
          </ListItemButton>
        </List>

        <List component="div" disablePadding>
          <ListItemButton
            sx={{
              py: "5px",
              pl: 5,
              "&:hover": { color: "#D8942E" },
              color: getTextColor("/role"),
            }}
            onClick={() => handleNavigation("/role")} // Navigate on sub-item click
          >
            <ListItemIcon sx={{ minWidth: "25px" }}>
              <SidebarArrowIcon width={"12"} />
            </ListItemIcon>
            <ListItemText
              primary="Role"
              sx={{ "& .MuiTypography-body1": { fontSize: "15px" } }}
            />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{
              py: "5px",
              pl: 5,
              "&:hover": { color: "#D8942E" },
              color: getTextColor("/permission-list"),
            }}
            onClick={() => handleNavigation("/permission-list")} // Navigate on sub-item click
          >
            <ListItemIcon sx={{ minWidth: "25px" }}>
              <SidebarArrowIcon width={"12"} />
            </ListItemIcon>
            <ListItemText
              primary="Permission List"
              sx={{ "& .MuiTypography-body1": { fontSize: "15px" } }}
            />
          </ListItemButton>
        </List>

        <List component="div" disablePadding>
          <ListItemButton
            sx={{
              py: "5px",
              pl: 5,
              "&:hover": { color: "#D8942E" },
              color: getTextColor("/customers"),
            }}
            onClick={() => handleNavigation("/customers")} // Navigate on sub-item click
          >
            <ListItemIcon sx={{ minWidth: "25px" }}>
              <SidebarArrowIcon width={"12"} />
            </ListItemIcon>
            <ListItemText
              primary="Customers"
              sx={{ "& .MuiTypography-body1": { fontSize: "15px" } }}
            />
          </ListItemButton>
        </List>
      </Collapse>

      {/* Categories */}
      <ListItemButton
        sx={{
          py: "12px",
          "&:hover": { color: "#D8942E" },
          color: open === "category" ? "#D8942E" : "inherit", // Highlight when expanded
        }}
        onClick={() => handleClick("category")} // Expand/collapse only
      >
        <ListItemIcon sx={{ minWidth: "42px" }}>
          <Category width={"20"} color="grey" />
        </ListItemIcon>
        <ListItemText primary="Categories" />
        {open === "category" ? (
          <DropdownBottomIcon color="#D8942E" width="12" />
        ) : (
          <DropdownRightIcon color="grey" width="7" />
        )}
      </ListItemButton>
      <Collapse in={open === "category"} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{
              py: "5px",
              pl: 5,
              "&:hover": { color: "#D8942E" },
              color: getTextColor("/category"),
            }}
            onClick={() => handleNavigation("/category")} // Navigate on sub-item click
          >
            <ListItemIcon sx={{ minWidth: "25px" }}>
              <SidebarArrowIcon width={"12"} />
            </ListItemIcon>
            <ListItemText
              primary="Main Category"
              sx={{ "& .MuiTypography-body1": { fontSize: "15px" } }}
            />
          </ListItemButton>
        </List>

        <List component="div" disablePadding>
          <ListItemButton
            sx={{
              py: "5px",
              pl: 5,
              "&:hover": { color: "#D8942E" },
              color: getTextColor("/sub-category"),
            }}
            onClick={() => handleNavigation("/sub-category")} // Navigate on sub-item click
          >
            <ListItemIcon sx={{ minWidth: "25px" }}>
              <SidebarArrowIcon width={"12"} />
            </ListItemIcon>
            <ListItemText
              primary="Sub Category"
              sx={{ "& .MuiTypography-body1": { fontSize: "15px" } }}
            />
          </ListItemButton>
        </List>
      </Collapse>

      {/* Sales */}
      <ListItemButton
        sx={{
          py: "12px",
          "&:hover": { color: "#D8942E" },
          color: open === "sales" ? "#D8942E" : "inherit", // Highlight when expanded
        }}
        onClick={() => handleClick("sales")} // Expand/collapse only
      >
        <ListItemIcon sx={{ minWidth: "42px" }}>
          <Sales width={"20"} color="grey" />
        </ListItemIcon>
        <ListItemText primary="Sales" />
        {open === "sales" ? (
          <DropdownBottomIcon color="#D8942E" width="12" />
        ) : (
          <DropdownRightIcon color="grey" width="7" />
        )}
      </ListItemButton>
      <Collapse in={open === "sales"} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{
              py: "12px",
              pl: 4,
              "&:hover": { color: "#D8942E" },
              color: getTextColor("/sales/list"),
            }}
            onClick={() => handleNavigation("/sales/list")} // Navigate on sub-item click
          >
            <ListItemIcon sx={{ minWidth: "42px" }}>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Sales List" />
          </ListItemButton>
        </List>
      </Collapse>

      {/* Chat */}
      <ListItemButton
        sx={{
          py: "12px",
          "&:hover": { color: "#D8942E" },
          color: getTextColor("/chat"),
        }}
        onClick={() => handleNavigation("/chat")} // Navigate on click
      >
        <ListItemIcon sx={{ minWidth: "42px" }}>
          <Chat width={"20"} color="grey" />
        </ListItemIcon>
        <ListItemText primary="Chat" />
      </ListItemButton>

      {/* Content */}
      <ListItemButton
        sx={{
          py: "12px",
          "&:hover": { color: "#D8942E" },
          color: open === "content" ? "#D8942E" : "inherit", // Highlight when expanded
        }}
        onClick={() => handleClick("content")} // Expand/collapse only
      >
        <ListItemIcon sx={{ minWidth: "42px" }}>
          <Content width={"20"} color="grey" />
        </ListItemIcon>
        <ListItemText primary="Content" />
        {open === "content" ? (
          <DropdownBottomIcon color="#D8942E" width="12" />
        ) : (
          <DropdownRightIcon color="grey" width="7" />
        )}
      </ListItemButton>
      <Collapse in={open === "content"} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{
              py: "12px",
              pl: 4,
              "&:hover": { color: "#D8942E" },
              color: getTextColor("/content/list"),
            }}
            onClick={() => handleNavigation("/content/list")} // Navigate on sub-item click
          >
            <ListItemIcon sx={{ minWidth: "42px" }}>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Content List" />
          </ListItemButton>
        </List>
      </Collapse>

      {/* Settings */}
      <ListItemButton
        sx={{
          py: "12px",
          "&:hover": { color: "#D8942E" },
          color: open === "settings" ? "#D8942E" : "inherit", // Highlight when expanded
        }}
        onClick={() => handleClick("settings")} // Expand/collapse only
      >
        <ListItemIcon sx={{ minWidth: "42px" }}>
          <Setting width={"20"} color="grey" />
        </ListItemIcon>
        <ListItemText primary="Settings" />
        {open === "settings" ? (
          <DropdownBottomIcon color="#D8942E" width="12" />
        ) : (
          <DropdownRightIcon color="grey" width="7" />
        )}
      </ListItemButton>
      <Collapse in={open === "settings"} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{
              py: "12px",
              pl: 4,
              "&:hover": { color: "#D8942E" },
              color: getTextColor("/settings/list"),
            }}
            onClick={() => handleNavigation("/settings/list")} // Navigate on sub-item click
          >
            <ListItemIcon sx={{ minWidth: "42px" }}>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Settings List" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
