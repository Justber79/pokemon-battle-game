/**
 * PAGE 4: BATTLE ARENA
 * Requirements: FR018, FR020
 * Team Logic:
 * - Display Chosen Card (Left) vs Random CPU Card (Right)
 * - Use 'BattleSchema' from @/schemas/battle.schema.ts for validation
 * - Compare stats + type advantages (Skill system)
 * - Trigger winner notification
 */
export default function BattlePage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-black uppercase italic">Battle Arena</h1>
      <p className="text-slate-500 mt-4 font-bold uppercase text-xs tracking-widest text-center">
        Display Player Card vs Random CPU Card + Start Battle Button
      </p>
      {/* UI Elements to use: Card.tsx, Button.tsx, Modal.tsx (for notification) */}
    </div>
  );
}
