import { Link, Outlet } from "react-router-dom";
import "../../styles/admindashboard.css";

export default function AdmindbLayout() {

  return (
    <div className="admin-layout">

      {/* SIDEBAR */}

      <div className="admin-sidebar">

        <div className="sidebar-top">

          <h2>CivicSnap</h2>

          <div className="sidebar-menu">

            <Link to="/admin/dashboard">
              📊 Dashboard
            </Link>

            <Link to="/admin/reports">
              📋 Reports
            </Link>

            <Link to="/admin/users">
              👤 Users
            </Link>

            <Link to="/admin/officers">
              👮 Officers
            </Link>

            <Link to="/admin/locations">
              📍 Locations
            </Link>

          </div>

        </div>

        <div className="sidebar-bottom">

          <div className="admin-user">
            <h4>ADMIN USER</h4>
            <p>Super Administrator</p>
          </div>

        </div>

      </div>

      {/* MAIN */}

      <div className="admin-main">

        <div className="admin-header">
          <h1>Admin Panel</h1>
        </div>

        <Outlet />

      </div>

    </div>
  );
}