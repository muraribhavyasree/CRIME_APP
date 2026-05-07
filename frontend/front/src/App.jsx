import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import DashboardLayout from "./pages/dashboard/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import ReportComplaint from "./pages/dashboard/ReportComplaint";
import MyComplaints from "./pages/dashboard/MyComplaints";
import ComplaintDetails from "./pages/dashboard/ComplaintDetails";
import Profile from "./pages/dashboard/Profile";
import TrackStatus from "./pages/dashboard/TrackStatus";

export default function App() {
  return (
    <Routes>

      {/* AUTH PAGES */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* DASHBOARD LAYOUT */}
      <Route path="/dashboard" element={<DashboardLayout />}>

        {/* default dashboard page */}
        <Route index element={<DashboardHome />} />

        {/* nested pages */}
        <Route path="report" element={<ReportComplaint />} />
        <Route path="my-complaints" element={<MyComplaints />} />
        <Route oath="ComplaintDetails" element={<ComplaintDetails />} />
        <Route path="profile" element={<Profile />} />
        <Route path="track-status" element={<TrackStatus />} />

      </Route>

    </Routes>
  );
}