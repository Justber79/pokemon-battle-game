"use client";

/**
 * PAGE 1: SIGNUP
 * Requirements: FR009, FR020
 * Team Logic: 
 * - Implement form using 'SignupSchema' from @/schemas/user.schema.ts
 * - Handle user creation and initial score (0)
 */
export default function SignupPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-black uppercase italic">Signup Page</h1>
      <p className="text-slate-500 mt-4 font-bold uppercase text-xs tracking-widest">
        Insert Signup Form here (Username, Password)
      </p>
      {/* UI Elements to use: Input.tsx, Button.tsx */}
    </div>
  );
}
