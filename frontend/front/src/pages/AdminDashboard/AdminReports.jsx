import { useEffect, useState } from "react";
import axios from "axios";

import "../../styles/adminReports.css";

export default function AdminReports() {

  const [complaints, setComplaints] = useState([]);

  const [loading, setLoading] = useState(true);

  // FETCH ALL COMPLAINTS
  useEffect(() => {

    const fetchComplaints = async () => {

      try {

        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:3000/api/admin/complaints",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        setComplaints(res.data);

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);
      }
    };

    fetchComplaints();

  }, []);

  // STATUS COLOR
  const getStatusClass = (status) => {

    if (status === "Pending") {
      return "pending";
    }

    if (status === "Resolved") {
      return "resolved";
    }

    return "progress";
  };

  return (

    <div className="admin-reports-container">

      {/* TOP */}
      <div className="reports-header">

        <div>
          <h1>All Complaints</h1>

          <p>
            View and manage complaints submitted by users.
          </p>
        </div>

      </div>

      {/* TABLE */}
      <div className="reports-table-wrapper">

        {loading ? (

          <h2 className="loading-text">
            Loading complaints...
          </h2>

        ) : complaints.length === 0 ? (

          <h2 className="loading-text">
            No complaints found
          </h2>

        ) : (

          <table className="reports-table">

            <thead>

              <tr>

                <th>ID</th>

                <th>User</th>

                <th>Email</th>

                <th>Title</th>

                <th>Category</th>

                <th>Location</th>

                <th>Status</th>

                <th>Date</th>

              </tr>

            </thead>

            <tbody>

              {complaints.map((item, index) => (

                <tr key={item._id}>

                  <td>
                    {index + 1}
                  </td>

                  <td>
                    {item.user?.name}
                  </td>

                  <td>
                    {item.user?.email}
                  </td>

                  <td>
                    {item.title}
                  </td>

                  <td>
                    {item.category}
                  </td>

                  <td>
                    {item.location}
                  </td>

                  <td>

                    <span
                      className={`status ${
                        getStatusClass(item.status)
                      }`}
                    >
                      {item.status}
                    </span>

                  </td>

                  <td>
                    {new Date(item.createdAt)
                      .toLocaleDateString()}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        )}

      </div>

    </div>
  );
}