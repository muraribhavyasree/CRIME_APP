import "../../styles/adminreports.css";

export default function AdminUsers() {

  const users = [
    {
      id: 1,
      name: "Rahul",
      email: "rahul@gmail.com",
      status: "Active"
    },
    {
      id: 2,
      name: "Priya",
      email: "priya@gmail.com",
      status: "Blocked"
    },
    {
      id: 3,
      name: "Kiran",
      email: "kiran@gmail.com",
      status: "Active"
    }
  ];

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
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}