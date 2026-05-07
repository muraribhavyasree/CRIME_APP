import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/profile.css";

export default function Profile() {
  const location = useLocation();
  const navigate = useNavigate();

  const name = location.state?.name || "User";
  const email = location.state?.email || "user@example.com";

  // LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.clear(); // optional
    navigate("/login");
  };

  return (
    <div className="profile-container">

      <div className="profile-card">

        <div className="avatar">
          👤
        </div>

        <h1>{name}</h1>

        <p className="email">{email}</p>

        <div className="info">

          <div className="info-box">
            <h3>Role</h3>
            <p>User</p>
          </div>

          <div className="info-box">
            <h3>Complaints</h3>
            <p>0</p>
          </div>

          <div className="info-box">
            <h3>Status</h3>
            <p>Active</p>
          </div>

        </div>

        {/* LOGOUT BUTTON */}
        <button
          className="profile-btn logout-btn"
          onClick={handleLogout}
        >
          🚪 Logout
        </button>

      </div>

    </div>
  );
}