export interface User {
  id: string;        // UUID or Serial ID from Neon DB
  username: string;  // FR009: NOT NULL
  password?: string; // Optional in the UI, but required for Auth logic
  createdAt: Date;   // FR009: Default Now
}

export interface UserStats {
  userId: string;
  totalScore: number;     // Accumulated score across all battles
  wins: number;           // Track progress for Dashboard (FR019)
  losses: number;
  xp: number;             // FR018: Track XP from battles
  rank?: string;          // e.g., "Master Ball", "Great Ball"
}

// This helps the team link the User to the Leaderboard
export interface LeaderboardEntry extends User {
  score: number;          // FR011: For ordering by highest first
  rank: number;           // Position in the global leaderboard
}
