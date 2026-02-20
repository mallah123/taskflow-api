import { useEffect, useState } from "react";
import API from "../api";

export default function Admin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get("/users/")
      .then(res => setUsers(res.data))
      .catch(() => alert("Admin access required"));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Admin Panel</h2>

      {users.map(user => (
        <div key={user.id}>
          {user.email} - {user.role}
        </div>
      ))}
    </div>
  );
}