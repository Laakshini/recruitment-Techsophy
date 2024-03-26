import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { NavListItems } from "./NavListItems";
import LightLogo from "../assets/icons/techsophy_logo .png";
import DarkLogo from "../assets/icons/Logo.svg";
import { useTheme } from "@mui/material";
import "../styles/SideNav.css";

const drawerWidth: number = 240;

// Styled component for customizing the Drawer component from Material-UI

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(7),
      },
    }),
  },
}));

interface NavProps {
  open: boolean;
  toggleDrawer: () => void;
}

const SideNav = ({ open, toggleDrawer }: NavProps) => {
  const theme = useTheme();
  return (
    /* 
  Drawer component toggles visibility based on the 'open' state and contains a toolbar and list of navigation items.
*/
    <Drawer variant="permanent" open={open}>
      <Toolbar className="header-toolbar-container">
        <img
          src={theme.palette.mode === "dark" ? DarkLogo : LightLogo}
          alt="comapny-logo"
          width={140}
        />
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        {NavListItems()}
        {/* <Divider sx={{ my: 1 }} />
    {secondaryListItems} */}
      </List>
    </Drawer>
  );
};

export default SideNav;

/* Control Flow: index -> App -> Wrapper -> Header -> SideNav */
