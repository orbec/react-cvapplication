import { useState } from "react";
import "../../styles/Name.css";
export default function Name() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Name");
  const handleName = (event) => setName(event.target.value);
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
          value={name}
          onChange={handleName}
          className="name"
        />
      ) : (
        <h1>{name}</h1>
      )}
    </div>
  );
}
