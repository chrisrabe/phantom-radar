import type {RuneClient} from "rune-games-sdk";

export interface GameState {
  players: Record<string, Player>;
}

export interface Player {
  id: string;
  role: PlayerRole
}

export enum PlayerRole {
  Pilot = "PILOT",
  Overwatch = "OVERWATCH"
}

type GameActions = {
  setRole(role: PlayerRole): void;
}

declare global {
  const Rune: RuneClient<GameState, GameActions>
}