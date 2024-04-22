import "./styles.css"
import { useEffect, useState } from "react"
import { PlayerId } from "rune-games-sdk/multiplayer"
import { GameState } from "./logic/logic.ts"

function App() {
  const [game, setGame] = useState<GameState>()
  const [yourPlayerId, setYourPlayerId] = useState<PlayerId | undefined>();
  const [currentRole, setCurrentRole] = useState<string>("Player");

  useEffect(() => {
    Rune.initClient({
      onChange: ({ game, action, yourPlayerId }) => {
        setGame(game)
        setYourPlayerId(yourPlayerId)
        setCurrentRole(yourPlayerId ? "Player" : "Spectator");
      },
    })
  }, [])

  if (!game) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div>Role: {currentRole} - {yourPlayerId}</div>
    </div>
  )
}

export default App
