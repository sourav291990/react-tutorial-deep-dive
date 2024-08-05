import Player from "./components/Player";
import Gameboard from "./components/Gameboard";
import Log from "./components/Log";
import { useState } from "react";
function App() {
  const [gameTurns, setgameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSquareClick(rowIndex, colIndex) {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X"
    );

    setgameTurns((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
      const updatedTurns = [
        {
          square: {
            row: rowIndex,
            col: colIndex,
          },
          player: currentPlayer,
        },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
        <Player name="Player 1" symbol="0" isActive={activePlayer === "O"} />
      </ol>
      <Gameboard onSelectSquare={handleSquareClick} turns={gameTurns} />
      <Log>{gameTurns}</Log>
    </div>
  );
}
export default App;
