export interface User {
  id: string;        // UUID or Serial ID from Neon DB
  username: string;  // NOT NULL
  password?: string; // Optional in the UI, but required for Auth logic
  createdAt: Date;   // Default Now
}

export interface UserStats {
  userId: string;
  totalScore: number;     // Accumulated score across all battles
  wins: number;           // Track progress for Dashboard
  losses: number;
  xp: number;             // Track XP from battles
  rank?: string;          // e.g., "Master Ball", "Great Ball"
}

// How to link the User to the Leaderboard
export interface LeaderboardEntry extends User {
  score: number;          // For ordering by highest first
  rank: number;           // Position in the global leaderboard
}
