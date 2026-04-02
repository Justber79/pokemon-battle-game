------------------------------
## 🚀 Pokémon Battle TCG - Project Foundation
This is a full-stack Pokémon battle application built with Next.js 16 (React Server Components), Tailwind CSS v4, and Neon PostgreSQL.
The Architectural Foundation (Layout, UI System, Database Connection, and Zod Validation) is already implemented. Follow the task distribution below to complete the game logic.

---

---

## ⚠️ CORE ARCHITECTURE - DO NOT MODIFY

To maintain project stability, the following files are considered the "Engine". Import from them, but do not overwrite or modify them:

- lib/db.ts – The central connection to the Neon Database.
- schemas/ – All Zod validation rules (The "Contract").
- types/ – Global TypeScript definitions for Pokémon and Users.
- app/layout.tsx – The global design, Navbar, and Footer.
- app/components/ui/ – Shared UI library (Button, Card, Input, Modal).
- lib/pokeapi.ts – Shared utility for fetching Pokémon data. Do not modify, just import functions.

---

## 🏗️ Project Foundation (Already Prepared)## 1. Visual & UX System

- Global Layout: A dark-mode/glassmorphism theme is active.
- Navigation: Navbar and Footer are pre-configured to link all required pages.
- UI Components: Use Button.tsx, Card.tsx, Input.tsx, and Modal.tsx for all your pages to keep the design consistent.

## 2. Database & Server Infrastructure

- Live Connection: Configured in ./lib/db.ts. Use the sql utility to interact with the database.
- Cloud Tables: The users and leaderboard tables are already live in the Neon Cloud.
- Server Actions: Placeholder functions are ready in ./lib/actions/ for you to plug in your SQL logic.

## 3. Data Validation

- Zod Schemas: Strict validation is ready in the /schemas folder. Always validate data before sending it to the database.

---

## 🛠️ Task Distribution & Implementation Guide##

👤 Task 1: Signup (Page 1)

- Workspace: app/page.tsx & lib/actions/user.actions.ts
- Base Info: Check signupSchema from ./schemas/user.schema to validate the form.
- Goal: Create a signup form where a user chooses a name and password. Use the Server Action to save the trainer (User) to the users table. Ensure no empty usernames are sent. Successful signup should redirect the user to the Home Page.
- UI components: Input.tsx, Button.tsx.

## 🛒 Task 2: Pokémon Marketplace / Home page (Page 2)

- Workspace: app/home/page.tsx
- Base Info: Fetch data from PokeAPI, ca. 20-50 Pokémon. Implement name/skill filtering and selection logic. Use PokemonCard from ./components/pokemon/.
- Goal: Display Pokémon in a grid. Implement a SearchBar to filter by name/type and add Pagination. The "Start Battle" button should only activate once a Pokémon is selected.
- UI components: PokemonCard.tsx, Input.tsx (Search), Button.tsx (Pagination).

## 🔍 Task 3: Pokémon Intel & Details (Page 3)

- Workspace: app/pokemon/[id]/page.tsx
- Base Info: Use the id from the URL to fetch specific data. Use PokemonDetailCard.
- Goal: Show detailed stats: Power (Attack), Defense, and Skill Type (Element). Include an "Add to Roster" using Button.tsx.

## ⚔️ Task 4: Battle Arena & Game Logic (Page 4)

- Workspace: app/battle/page.tsx & lib/actions/battle.actions.ts
- Base Info: Use battleSchema for validation.
- Goal: Compare User vs. CPU stats. Apply type advantages (e.g., Water > Fire). On victory, call the action to update the score in the leaderboard table. Show the winner using the Modal component.
- UI components: Modal.tsx (Results), Button.tsx (Fight).

## 🏆 Task 5: Hall of Fame / Dashboard (Page 5)

- Workspace: app/dashboard/page.tsx & lib/actions/leaderboard.actions.ts
- Base Info: Call getLeaderboardData from the actions folder schemas/leaderboard.schema.ts
- Goal: Fetch all scores from Neon DB using sql. Crucial: Order the list by highest score first. Wrap each row in a Card component ui/Card.tsx.

---

## 🔑 Critical Setup Instructions

1.  Environment Variables: Create a .env file in the root folder (it is ignored by Git).
2.  Database URL: I will provide the DATABASE_URL privately. Paste it into your .env file.
3.  Imports: Always use relative paths (e.g., ../../lib/db) to avoid VS Code errors.

---

## Architecture is locked and ready. Happy coding, Team!
