/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import SuperUser from "views/SuperUser/SuperUser.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import ReportTableList from "views/TableList/ReportTableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";
import { CardGiftcardTwoTone, Cloud, CloudCircleTwoTone, CloudDone, CloudDownload, CloudDownloadTwoTone, FolderOpenTwoTone, GroupAddTwoTone, HdrOnTwoTone, MobileOffTwoTone, MonetizationOnTwoTone, MoneyTwoTone, PaymentTwoTone, ReportOffTwoTone, ReportProblemTwoTone, SpeakerTwoTone, SubwayTwoTone, WallpaperTwoTone, WavesTwoTone, WbCloudyTwoTone } from "@material-ui/icons";
import { MDBRow } from "mdbreact";
import { FormControl } from "react-bootstrap";

const dashboardRoutes = [
 
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
    subNodes:
    {
      path: "/dashboard",
      name: "Executive Home",
      rtlName: "dashboard",
      icon: Dashboard,
      component: DashboardPage,
      layout: "/admin"
    }
  },
  {
    path: "/SuperAdmin",
    name: "WMS",
    rtlName: "SuperAdmin",
    icon: SubwayTwoTone,
    component: SuperUser,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User",
    rtlName: "UserProfile",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Reports",
    rtlName: "TableList",
    icon: "content_paste",
    component: ReportTableList,
    layout: "/admin"
  }
 
  
];

export default dashboardRoutes;
