import { useState } from "react";
export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState();
  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);
  }
  let playerNameTag = <span className="player-name">{name}</span>;
  let editButtonText = "Edit";
  if (isEditing) {
    playerNameTag = <input type="text" required value={name} />;
    editButtonText = "Save";
  }

  return (
    <li>
      <span className="player">
        {playerNameTag}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{editButtonText}</button>
    </li>
  );
}
