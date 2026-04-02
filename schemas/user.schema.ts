import { z } from "zod";

export const SignupSchema = z.object({
  username: z.string().min(3, "Min 3 characters").max(20),
  password: z.string().min(6, "Min 6 characters"),
  score: z.number().default(0), // FR009: Score initialized to 0
});

export type SignupInput = z.infer<typeof SignupSchema>;
