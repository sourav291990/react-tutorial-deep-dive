import Player from "./components/Player";
import Gameboard from "./components/Gameboard";
import { useState } from "react";
function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSquareClick() {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X"
    );
  }

  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
        <Player name="Player 1" symbol="0" isActive={activePlayer === "O"} />
      </ol>
      <Gameboard
        onSelectSquare={handleSquareClick}
        playerSymbol={activePlayer}
      />
    </div>
  );
}
export default App;
