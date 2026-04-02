/**
 * PAGE 5: DASHBOARD / LEADERBOARD
 * Requirements: FR011, FR019
 * Team Logic:
 * - Fetch scores from Neon PostgreSQL using sql from @/lib/db.ts
 * - Order by highest score first
 * - Display rank/place and user score
 */
export default function DashboardPage() {
  return (
   <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-black uppercase italic">Dashboard: Rankings</h1>
      <p className="text-slate-500 mt-2 font-bold uppercase text-xs tracking-widest">
        Insert Leaderboard Table / Score List here
      </p>
      {/* UI Elements to use: Card.tsx (for list rows) */}
    </div>
  );
}
