import * as React from "react";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useAppSelector } from "../redux/Hook";
import { useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import UserLogo from "../assets/images/man.png";
import SideNav from "./SideNav";
import useCustomStyles from "../hooks/CustomStylesHook";
// import "../styles/Header.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { TextField } from "@mui/material";

// Styled AppBar component to control drawer state
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const styles = (theme: any) => ({
  pageTitle: {
    textTransform: "capitalize",
  },
  headerToolbar: {
    minHeight: 48,
    paddingRight: 24,
  },
  headerIconButton: {
    marginRight: 36,
  },
  hidden: {
    display: "none",
  },
  headerTypography: {
    flexGrow: 1,
    textTransform: "capitalize",
    color: theme.palette.secondary.main,
  },
  headerThemeButton: {
    color: theme.palette.common.white, // Use theme's palette for consistent colors
  },
  headerUserBox: {
    flexGrow: 0,
  },
  headerUserButton: {
    padding: 0,
  },
  headerAvatar: {
    width: 32,
    height: 32,
  },
  headerUserMenu: {
    marginTop: 45,
  },
});

function Header() {
  const themeDataState = useAppSelector((state) => state.UpdateTheme);
  const theme = useTheme();
  const classes = useCustomStyles(styles, theme);
  const navigate = useNavigate();

  const location = useLocation();
  const routeName = location.pathname.split("/").pop(); // Assuming the last part of the path is the route name

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const dispatch = useDispatch();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleThemeChange = () => {
    // Assuming themeDataState.mode contains the current mode (either "dark" or "light")
    const newMode = themeDataState.mode === "dark" ? "light" : "dark";

    dispatch({
      type: "SAVE_THEME_DATA",
      data: {
        ...themeDataState,
        mode: newMode,
      },
    });
  };

  const handleAppLogout = () => {
    sessionStorage.clear();
    navigate(`${process.env.PUBLIC_URL}/login`);
  };

  return (
    <>
      <AppBar position="absolute" open={open}>
        <Toolbar className={classes?.headerToolbar}>
          <IconButton
            edge="start"
            color="secondary"
            aria-label="open drawer"
            onClick={toggleDrawer}
            className={`${classes?.headerIconButton} ${
              open ? classes?.hidden : ""
            }`}
          >
            <MenuIcon />
          </IconButton>

          {/* Route name */}
          <Typography
            component="h1"
            variant="h6"
            color="secondary"
            noWrap
            className={classes?.headerTypography}
          >
            {routeName}
          </Typography>

          {/* Theme toggle */}
          <Box>
            {/* <IconButton onClick={handleThemeChange}>
              {themeDataState?.mode === "light" ? (
                <DarkModeOutlinedIcon
                  fontSize="small"
                  className={classes?.headerDarkmodeOutlinedIcon}
                />
              ) : (
                <DarkModeIcon fontSize="small" />
              )}
            </IconButton> */}
          </Box>

          {/* User menu */}
          <Box className={classes?.headerUserBox}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                className={classes?.headerUserButton}
              >
                <Avatar alt="Remy Sharp" src={UserLogo} />
              </IconButton>
            </Tooltip>

            {/* User menu items */}
            <Menu
              className={classes?.headerUserMenu}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              <MenuItem onClick={handleAppLogout}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* SideNav component */}
      <SideNav open={open} toggleDrawer={toggleDrawer} />
    </>
  );
}
export default Header;

/* Control Flow: index -> App -> Wrapper -> Header*/
