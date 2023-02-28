import { AiFillDashboard } from "react-icons/ai";
import { GiTeacher, GiWhiteBook, GiBookmarklet } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import { BsFillChatLeftTextFill, BsFillEyeFill } from "react-icons/bs";
import { VscFeedback } from "react-icons/vsc";
import { FaCcPaypal } from "react-icons/fa";
import DashBoard from "../pages/Admin/Dashboard/DashBoard";
import Staff from "../pages/Admin/Staff/Staff";
import Student from "../pages/Admin/Student/Student";
import Courses from "../pages/Admin/Course/Courses";
import SubjectForm from "../pages/Admin/Subject/SubjectForm";
import Notice from "../pages/Admin/Notice/Notice";
import Attendance from "../pages/Admin/Attendance/Attendance";
import StaffFeedback from "../pages/Admin/Staff Feedback/StaffFeedback";
import StudentFeedback from "../pages/Admin/Student Feedback/StudentFeedback";
import Salary from "../pages/Admin/Salary/Salary";
import Fees from "../pages/Admin/Fees/Fees";
import * as RiIcons from "react-icons/ri";
import AddStaff from "../pages/Admin/Staff/AddStaff";
import AddCourse from "../pages/Admin/Course/AddCourse";
import AddStudent from "../pages/Admin/Student/AddStudent";
import Home from "../pages/User/Home";
import About from "../pages/User/About";
import Course from "../pages/User/Course";
import Event from "../pages/User/Event";
import ViewNotice from "../pages/Admin/Notice/ViewNotice";
import AddNotice from "../pages/Admin/Notice/AddNotice";

export const authRoute = [
  {
    path: "/",
    name: "dashboard",
    icon: <AiFillDashboard />,
    element: <DashBoard />,
  },
  {
    path: "/ourstaff",
    name: "our staff",
    icon: <GiTeacher />,
    element: <Staff />,
    subnav: [
      {
        path: "/ourstaff/addstaff",
        name: "add staff",
        element: <AddStaff />,
      },
    ],
  },
  {
    path: "/ourstudent",
    name: "our students",
    icon: <HiUserGroup />,
    element: <Student />,
    subnav: [
      {
        path: "/ourstudent/addstudent",
        name: "add student",
        element: <AddStudent />,
      },
    ],
  },
  {
    path: "/courses",
    name: "courses",
    icon: <GiWhiteBook />,
    element: <Courses />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,
    subnav: [
      {
        path: "/courses/addcourse",
        name: "add course",
        element: <AddCourse />,
      },
    ],
  },
  {
    path: "/subjects",
    name: "subjects",
    icon: <GiBookmarklet />,
    element: <SubjectForm />,
  },
  {
    path: "/notice",
    name: "notice",
    icon: <BsFillChatLeftTextFill />,
    element: <Notice />,
    subnav: [
      {
        path: "/notice/addnotice",
        name: "add notice",
        element: <AddNotice />,
      },
      {
        path: "/notice/viewnotice",
        name: "view notice",
        element: <ViewNotice />,
      },
    ],
  },
  {
    path: "/viewattendence",
    name: "view attendence",
    icon: <BsFillEyeFill />,
    element: <Attendance />,
  },
  {
    path: "/stafffeedback",
    name: "staff feedback",
    icon: <VscFeedback />,
    element: <StaffFeedback />,
  },
  {
    path: "/studentfeedback",
    name: "student feedback",
    icon: <VscFeedback />,
    element: <StudentFeedback />,
  },
  {
    path: "/staffsalary",
    name: "staff salary",
    icon: <FaCcPaypal />,
    element: <Salary />,
  },
  {
    path: "/studentfees",
    name: "student fees",
    icon: <FaCcPaypal />,
    element: <Fees />,
  },
];

export const publicRoute = [
  {
    path: "/home",
    name: "home",
    element: <Home />,
  },
  {
    path: "/about",
    name: "about",
    element: <About />,
  },
  {
    path: "/course",
    name: "course",
    element: <Course />,
  },
  {
    path: "/events",
    name: "event",
    element: <Event />,
  },
];
