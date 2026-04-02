import { z } from "zod";

export const BattleSchema = z.object({
  playerPokemon: z.object({
    id: z.number(),
    name: z.string(),
<<<<<<< HEAD
    type: z.enum(["fire", "water", "grass", "electric", "psychic", "normal"]), 
=======
    type: z.enum(["fire", "water", "grass", "electric", "psychic", "normal"]),
>>>>>>> 45dbdeda16034afd02085390e92c85c2ed797a67
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
