import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/dashboardHome.css";

export default function DashboardHome() {
  const location = useLocation();
  const navigate = useNavigate();

  const name = location.state?.name || "User";

  return (
    <div className="home-container">

      <div className="home-card">

        {/* HEADER */}
        <div className="top-section">

          <div>
            <h1>👋 Welcome, {name}</h1>

            <p className="subtitle">
              Manage complaints and improve your city smarter.
            </p>
          </div>

          <div
            className="profile-circle"
            onClick={() => navigate("/dashboard/profile")}
          >
            👤
          </div>

        </div>

        {/* STATS */}
        <div className="stats-row">

          <div className="mini-card">
            <h2>12</h2>
            <p>Total Complaints</p>
          </div>

          <div className="mini-card">
            <h2>5</h2>
            <p>Pending Cases</p>
          </div>

          <div className="mini-card">
            <h2>7</h2>
            <p>Resolved Cases</p>
          </div>

        </div>

        {/* MAIN FEATURES */}
        <div className="card-grid">

          <div
            className="stat-card"
            onClick={() => navigate("/dashboard/report")}
          >
            <h2>📢</h2>

            <h3>Report Complaint</h3>

            <p>
              Quickly report issues happening in your area.
            </p>
          </div>

          <div
            className="stat-card"
            onClick={() => navigate("/dashboard/my-complaints")}
          >
            <h2>📄</h2>

            <h3>My Complaints</h3>

            <p>
              View and track all submitted complaints.
            </p>
          </div>

          <div className="stat-card"
          onClick={() => navigate("/dashboard/track-status")}>

            <h2>📊</h2>

            <h3>Track Status</h3>

            <p>
              Monitor complaint progress in real time.
            </p>
          </div>

          <div
            className="stat-card"
            onClick={() => navigate("/dashboard/profile")}
          >
            <h2>👤</h2>

            <h3>My Profile</h3>

            <p>
              Manage account and personal information.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}