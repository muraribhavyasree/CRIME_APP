import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";    
import AdminLogin from "./pages/AdminLogin";
import AdminRegister from "./pages/AdminRegister";
import AdmindbLayout from "./pages/AdminDashboard/AdmindbLayout"; 
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";
import ReportComplaint from "./pages/dashboard/ReportComplaint";
import MyComplaints from "./pages/dashboard/MyComplaints";
import ComplaintDetails from "./pages/dashboard/ComplaintDetails";
import Profile from "./pages/dashboard/Profile";
import TrackStatus from "./pages/dashboard/TrackStatus";
import Admindbhome from "./pages/AdminDashboard/Admindbhome";
import AdminReports from "./pages/AdminDashboard/AdminReports";
import AdminUsers from "./pages/AdminDashboard/AdminUsers";
import AdminOfficers from "./pages/AdminDashboard/AdminOfficers";
import AdminLocations from "./pages/AdminDashboard/AdminLocations";

const RequireUser = ({ children }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const RequireAdmin = ({ children }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (!token || !user) {
    return <Navigate to="/admin/login" replace />;
  }

  if (user.role !== "admin") {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={
          <RequireUser>
            <DashboardLayout />
          </RequireUser>
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="report" element={<ReportComplaint />} />
        <Route path="my-complaints" element={<MyComplaints />} />
        <Route path="complaint/:id" element={<ComplaintDetails />} />
        <Route path="profile" element={<Profile />} />
        <Route path="track-status" element={<TrackStatus />} />
      </Route>

      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/register" element={<AdminRegister />} />

      <Route
        path="/admin"
        element={
          <RequireAdmin>
            <AdmindbLayout />
          </RequireAdmin>
        }
      >
        <Route path="dashboard" element={<Admindbhome />} />
        <Route path="reports" element={<AdminReports />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="officers" element={<AdminOfficers />} />
        <Route path="locations" element={<AdminLocations />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}