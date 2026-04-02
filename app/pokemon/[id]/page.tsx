/**
 * PAGE 3: POKEMON DETAILS
 * Requirements: FR016
 * Team Logic:
 * - Fetch specific ID from PokeAPI
 * - Display stats: Power, Skill Type (Fire/Water/etc), Defense
 * - Implement "Add to Roster" button
 */
export default function DetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-black uppercase italic">Pokemon Details: #{params.id}</h1>
      <p className="text-slate-500 mt-4 font-bold uppercase text-xs tracking-widest text-center">
        Insert Detailed Card here (Power, Skill Type, Defense)
      </p>
      {/* UI Elements to use: PokemonDetailCard.tsx, Button.tsx */}
    </div>
  );
}
