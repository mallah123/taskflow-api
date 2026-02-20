import { useEffect, useState } from "react";
import API from "../api";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await API.get("/tasks/");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
  <div style={{ padding: "40px" }}>
    <h2 style={{ marginBottom: "20px" }}>Dashboard</h2>

    <div style={{
      background: "#1f2937",
      padding: "20px",
      borderRadius: "10px",
      marginBottom: "20px"
    }}>
      <TaskForm refresh={fetchTasks} />
    </div>

    <div style={{
      background: "#1f2937",
      padding: "20px",
      borderRadius: "10px"
    }}>
      <TaskList tasks={tasks} refresh={fetchTasks} />
    </div>
  </div>
);
}