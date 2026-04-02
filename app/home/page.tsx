/**
 * PAGE 2: MAIN POKEMON LIST
 * Requirements: FR015, FR014
 * Team Logic:
 * - Fetch Pokémon from PokeAPI
 * - Implement SearchBar (filter by name/skills)
 * - Implement Pagination
 * - Implement 'Start Battle' button (active only when pokemon selected)
 */
export default function HomePage() {
  return (
   <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-black uppercase italic">Home Page</h1>
      <p className="text-slate-500 mt-2 font-bold uppercase text-xs tracking-widest">
        Insert SearchBar and Start button, Pokemon Cards with buttons, and Pagination here
      </p>
      {/* UI Elements to use: PokemonCard.tsx, Input.tsx (for Search), Button.tsx */}
    </div>
  );
}
