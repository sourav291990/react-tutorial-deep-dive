import { useState } from "react";
export default function Player({ name, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState();
  const [playerName, setPlayerName] = useState(name);

  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let playerNameTag = <span className="player-name">{playerName}</span>;
  let editButtonText = "Edit";
  if (isEditing) {
    playerNameTag = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    editButtonText = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameTag}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{editButtonText}</button>
    </li>
  );
}
