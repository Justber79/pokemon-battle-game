"use server"

import { sql } from "@/lib/db";

/**
 * ACTION: Fetch Global Rankings
 * Requirements: FR011, FR019
 * Team Task: Write the SQL query to get all scores ordered by highest first
 */
export async function getLeaderboardData() {
  try {
    // TEAM LOGIC: Fetch data from Neon DB
    // Example: SELECT username, score FROM leaderboard ORDER BY score DESC
    // [SELECT SQL LOGIC HERE]

    return []; // Placeholder return for the team
  } catch (error) {
    console.error("Database fetch failed", error);
    return [];
  }
}
