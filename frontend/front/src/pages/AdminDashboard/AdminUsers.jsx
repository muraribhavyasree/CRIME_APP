import axios from "axios";
import { useEffect, useState } from "react";
import "../../styles/adminreports.css";

export default function AdminUsers() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchUsers = async () => {

      try {

        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:3000/api/admin/complaints",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(res.data);

        // REMOVE DUPLICATE USERS
        const uniqueUsers = [];

        const addedEmails = new Set();

        res.data.forEach((complaint) => {

          if (
            complaint.user &&
            !addedEmails.has(complaint.user.email)
          ) {

            addedEmails.add(complaint.user.email);

            uniqueUsers.push({
              _id: complaint._id,
              name: complaint.user.name,
              email: complaint.user.email,
              status: "Active",
            });
          }
        });

        setUsers(uniqueUsers);

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);
      }
    };

    fetchUsers();

  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="admin-page">

      <h1>Users Management</h1>

      <table className="admin-table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {users.map((user,index) => (

            <tr key={user._id}>
              <td>{index+1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>

              <td>
                <span
                  style={{
                    color: "limegreen",
                    fontWeight: "bold"
                  }}
                >
                  {user.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}