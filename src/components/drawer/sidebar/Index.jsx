import StarBorder from "@mui/icons-material/StarBorder";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { ReactComponent as DropdownBottomIcon } from "../../../assets/icons/dropdownBottomIcon.svg";
import { ReactComponent as DropdownRightIcon } from "../../../assets/icons/dropdownRightIcon.svg";
import { ReactComponent as Category } from "../../../assets/icons/sidebarIcon/category.svg";
import { ReactComponent as Chat } from "../../../assets/icons/sidebarIcon/chat.svg";
import { ReactComponent as Content } from "../../../assets/icons/sidebarIcon/content.svg";
import { ReactComponent as Dashboard } from "../../../assets/icons/sidebarIcon/dashboard.svg";
import { ReactComponent as Sales } from "../../../assets/icons/sidebarIcon/sales.svg";
import { ReactComponent as Setting } from "../../../assets/icons/sidebarIcon/setting.svg";
import { ReactComponent as UserSetting } from "../../../assets/icons/sidebarIcon/userSetting.svg";

export default function SidebarList() {
  const [open, setOpen] = React.useState(null);

  const handleClick = (item) => {
    setOpen(open === item ? null : item);
  };

  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper", padding: "0 10px" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton
        sx={{
          py: "12px",
          "&:hover": { color: "#D8942E" },
          "&.Mui-selected": { color: "#D8942E" },
          color: open === "dashboard" ? "#D8942E" : "inherit", // Keep color for selected
        }}
        onClick={() => handleClick("dashboard")}
      >
        <ListItemIcon sx={{ minWidth: "42px" }}>
          <Dashboard width={"20"} color="grey" />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>

      <ListItemButton
        sx={{
          py: "12px",
          "&:hover": { color: "#D8942E" },
          color: open === "user" ? "#D8942E" : "inherit",
        }}
        onClick={() => handleClick("user")}
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
        <List component="div" disablePadding>
          <ListItemButton
            sx={{
              py: "12px",
              pl: 4,
              "&:hover": { color: "#D8942E" },
              color: open === "user" ? "#D8942E" : "inherit",
            }}
          >
            <ListItemIcon sx={{ minWidth: "42px" }}>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="User List" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton
        sx={{
          py: "12px",
          "&:hover": { color: "#D8942E" },
          color: open === "category" ? "#D8942E" : "inherit",
        }}
        onClick={() => handleClick("category")}
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
              py: "12px",
              pl: 4,
              "&:hover": { color: "#D8942E" },
              color: open === "category" ? "#D8942E" : "inherit",
            }}
          >
            <ListItemIcon sx={{ minWidth: "42px" }}>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Category List" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton
        sx={{
          py: "12px",
          "&:hover": { color: "#D8942E" },
          color: open === "sales" ? "#D8942E" : "inherit",
        }}
        onClick={() => handleClick("sales")}
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
              color: open === "sales" ? "#D8942E" : "inherit",
            }}
          >
            <ListItemIcon sx={{ minWidth: "42px" }}>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Sales List" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton
        sx={{
          py: "12px",
          "&:hover": { color: "#D8942E" },
          "&.Mui-selected": { color: "#D8942E" },
          color: open === "chat" ? "#D8942E" : "inherit", // Keep color for selected
        }}
        onClick={() => handleClick("chat")}
      >
        <ListItemIcon sx={{ minWidth: "42px" }}>
          <Chat width={"20"} color="grey" />
        </ListItemIcon>
        <ListItemText primary="chat" />
      </ListItemButton>

      <ListItemButton
        sx={{
          py: "12px",
          "&:hover": { color: "#D8942E" },
          color: open === "content" ? "#D8942E" : "inherit",
        }}
        onClick={() => handleClick("content")}
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
              color: open === "content" ? "#D8942E" : "inherit",
            }}
          >
            <ListItemIcon sx={{ minWidth: "42px" }}>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Content List" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton
        sx={{
          py: "12px",
          "&:hover": { color: "#D8942E" },
          color: open === "settings" ? "#D8942E" : "inherit",
        }}
        onClick={() => handleClick("settings")}
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
              color: open === "settings" ? "#D8942E" : "inherit",
            }}
          >
            <ListItemIcon sx={{ minWidth: "42px" }}>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="General Settings" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
