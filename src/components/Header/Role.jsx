import { useState } from "react";
import "../../styles/Role.css";

export default function Role() {
  const [isEditing, setIsEditing] = useState(false);
  const [role, setRole] = useState("Role");
  const handleName = (event) => setRole(event.target.value);
  const handleEditing = () => setIsEditing(!isEditing);
  return (
    <div className="container">
      <button
        onClick={handleEditing}
        className={isEditing ? "done" : "edit"}
      ></button>
      {isEditing ? (
        <input
          type="text"
          value={role}
          onChange={handleName}
          className="role"
        />
      ) : (
        <h2>{role}</h2>
      )}
    </div>
  );
}
