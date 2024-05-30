import React, { FC } from "react";
import Jobs from "./pages/Jobs";
import Reports from "./pages/Reports";
import Calender from "./pages/Calender";
import Dashboard from "./pages/Dashboard/Dashboard";
import CandidateProfile from "./pages/candidateProfile/index";
import Login from "./pages/authentication";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

interface Route {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: FC<{}>;
  index: number;
  icon: React.ElementType;
}

export const routes: Array<Route> = [
  {
    key: "dashboard",
    title: "Dashboard",
    path: `${process.env.PUBLIC_URL}/dashboard`,
    enabled: true,
    component: Dashboard,
    icon: HomeRoundedIcon,
    index: 1,
  },
  {
    key: "candidateProfile",
    title: "Candidate Profile",
    path: `${process.env.PUBLIC_URL}/candidateProfile`,
    enabled: true,
    component: CandidateProfile,
    icon: PeopleIcon,
    index: 2,
  },
  // {
  //   key: "login",
  //   title: "Lofin Page",
  //   path: `${process.env.PUBLIC_URL}/login`,
  //   enabled: true,
  //   component: Login,
  //   index: 0,
  // },

  {
    key: "jobs",
    title: "Jobs",
    path: `${process.env.PUBLIC_URL}/jobs`,
    enabled: true,
    component: Jobs,
    icon: WorkRoundedIcon,
    index: 2,
  },
  {
    key: "reports",
    title: "Reports",
    path: `${process.env.PUBLIC_URL}/reports`,
    enabled: true,
    component: Reports,
    icon: BarChartIcon,
    index: 4,
  },
  {
    key: "calender",
    title: "Calender",
    path: `${process.env.PUBLIC_URL}/calender`,
    enabled: true,
    component: Calender,
    icon: CalendarMonthRoundedIcon,
    index: 5,
  },
];
