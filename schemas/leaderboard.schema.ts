import { z } from "zod";

export const LeaderboardSchema = z.object({
  username: z.string().nonempty(),
  score: z.number().int(),
  date: z.date().default(() => new Date()), // FR009: Default Now
});
