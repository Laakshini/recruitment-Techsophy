import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import { useNavigate } from "react-router-dom";
import { routes as appRoutes } from "../Routes";
import { useTheme } from "@mui/material";

export const NavListItems = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleNavigationClick = (path: any) => {
    // Handle navigation to the Dashboard page
    navigate(path);
  };

  const listTextStyles = {
    color: theme.palette.primary.main,
  };

  return (
    <React.Fragment>
      {appRoutes?.map((route) => {
        return (
          <ListItemButton onClick={() => handleNavigationClick(route?.path)}>
            <ListItemIcon>
              <route.icon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={route?.title}
              color="primary"
              disableTypography
              sx={listTextStyles}
            />
          </ListItemButton>
        );
      })}
    </React.Fragment>
  );
};

/* Control Flow: index -> App -> Wrapper -> Header -> SideNav -> NavListItems */
