import API from "../api";

export default function TaskList({ tasks, refresh }) {

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    refresh();
  };
{tasks.map(task => (
  <div
    key={task.id}
    style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px",
      borderBottom: "1px solid #374151"
    }}
  >
    <div>
      <strong>{task.title}</strong>
      <div style={{ fontSize: "12px", color: "#9ca3af" }}>
        {task.description}
      </div>
    </div>

    <button
      style={{ width: "80px", background: "#dc2626" }}
      onClick={() => deleteTask(task.id)}
    >
      Delete
    </button>
  </div>
))};
}