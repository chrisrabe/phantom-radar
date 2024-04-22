import {GameState, Player, PlayerRole} from "./types.ts";

Rune.initLogic({
  minPlayers: 2,
  maxPlayers: 2,
  setup: (allPlayerIds): GameState => ({
    players: allPlayerIds.reduce<Record<string, Player>>((acc, id, idx) => {
      acc[id] = {
        id,
        role: Object.values(PlayerRole)[idx]
      }
      return acc;
    }, {})
  }),
  actions: {
    setRole(role: PlayerRole, {game, playerId}) {
      game.players[playerId].role = role;
    }
  },
  events: {
    playerLeft: (playerId, {game}) => {
      delete game.players[playerId];
    },
    playerJoined: (playerId, {game}) => {
      game.players[playerId] = {
        id: playerId,
        role: PlayerRole.Pilot
      }
    }
  }
})

export * from "./types.ts"