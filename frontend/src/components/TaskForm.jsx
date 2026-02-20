import { useState } from "react";
import API from "../api";

export default function TaskForm({ refresh }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createTask = async () => {
    try {
      await API.post("/tasks/", { title, description });
      setTitle("");
      setDescription("");
      refresh();
    } catch (err) {
      alert("Error creating task");
    }
  };

  return (
    <div>
      <h3>Create Task</h3>
      <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title"/>
      <input value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Description"/>
      <button onClick={createTask}>Add</button>
    </div>
  );
}