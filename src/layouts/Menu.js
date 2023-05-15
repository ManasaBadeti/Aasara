import {Route, Navigate, Routes} from 'react-router-dom';
import React, {lazy, Suspense} from "react";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import NoteAddSharpIcon from '@mui/icons-material/NoteAddSharp';
import FactCheckSharpIcon from '@mui/icons-material/FactCheckSharp';
import SummarizeSharpIcon from '@mui/icons-material/SummarizeSharp';
import MailSharpIcon from '@mui/icons-material/MailSharp';
import OutboxIcon from '@mui/icons-material/Outbox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// import Sentbox from '../pages/sentbox/Sentbox';



const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/auth/Login"));
const Rolemaster = lazy(() => import("../pages/RoleMaster"));
const PatientReg = lazy(() => import("../pages/PatientReg"));
const RegisterGrievance = lazy(() => import("../pages/RegisterGrievance"));
export const menu = [
  {
    icon: <DashboardSharpIcon />,
    title: "Dashboard",
    pageLink: '/home',
    view: <Home/>,
  },
  {
    icon: <AccountCircleIcon />,
    title: "Register Grievance",
    pageLink: '/registerGrievance',
    view: <RegisterGrievance/>,
  }
  // {
  //   icon: <AppRegistrationIcon />,
  //   title: "Manage Request",
  //   pageLink: '/approval',
  //   view: <Approval/>,
  //   items: [
  //       // {
  //       //   title: "Create Employee",
  //       //   pageLink: "/createemployee",
  //       //   // view: <RegisteredPatient/>,
  //       // },
  //       // {
  //       //   title: "Medical Reimbursement Claim Tracker",
  //       //   // pageLink: "/demo",
  //       //   pageLink: "/medicalclaimtracker",
  //       //   // view: <RegisteredPatientView/>,
  //       // },
  //       // {
  //       //   title: "Initiate Health Card/View Application",
  //       //   pageLink: "/healthcardapplication",
  //       //   // view: <ReferredPatientView/>,
  //       // },
  //       // {
  //       //   title: "Initiate New/Rejected Beneficiaries",
  //       //   pageLink: "/initiatenewrejectedbeneficiaries",
  //       //   // view: <TelephonicRegView/>,
  //       // },
  //       // {
  //       //   title: "Download Health Card",
  //       //   pageLink: "/downloadhealthcard",
  //       //   // view: <TelephonicRegView/>,
  //       // }
  //     ]
  // },
  // {
  //   icon: <LocalLibraryOutlinedIcon />,
  //   title: "Patients",
  //   items: [
  //       {
  //         title: "Telephonic Registration",
  //         pageLink: "/telephonicRegistration",
  //         view: <TelephonicRegistration/>,
  //       },
  //       {
  //         title: "Registered Patients View",
  //         pageLink: "/telephonicRegEdit",
  //         view: <TelephonicRegEdit/>,
  //       },
  //       {
  //         title: "Telephonic Registered Patients",
  //         pageLink: "/telephonicRegView",
  //         view: <TelephonicRegView/>,
  //       },
  //     ]
  // },
  // {
  //   icon: <TrendingUpOutlinedIcon />,
  //   title: "Reports",
  //   pageLink: "/demo",
  //   view: <Demo/>,
  // },
  // {
  //   icon: <DescriptionOutlinedIcon />,
  //   title: "Settings"
  // }
];

export const AppRoutes = () => {
  return (
    <Suspense fallback={<div />}>
      <Routes>
        <Route path="/" element={<Login/>} exact />
        <Route path="/home" element={<Home/>} />
        <Route path="/rolemaster" element={<Rolemaster/>} />
 
          {/* {menu.map((page, index) => {
            return (
              <Route
                exact
                element={page.pageLink}
                render={({match}) => <page.view />}
                key={index}
              />
            );
          })} */}
          {/* <Navigate to="/" /> */}
        </Routes>
      </Suspense>
  );
}
