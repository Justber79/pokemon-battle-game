import { z } from "zod";

export const BattleSchema = z.object({
  playerPokemon: z.object({
    id: z.number(),
    name: z.string(),
    type: z.enum(["fire", "water", "grass", "electric", "psychic", "normal"]), 
    attack: z.number().nonnegative(),
    defense: z.number().nonnegative(),
  }),
  opponentPokemon: z.object({
    id: z.number(),
    name: z.string(),
    type: z.string(),
    attack: z.number().nonnegative(),
    defense: z.number().nonnegative(),
  }),
  result: z.enum(["WIN", "LOSS", "DRAW"]),
  pointsGained: z.number().int(),
});
