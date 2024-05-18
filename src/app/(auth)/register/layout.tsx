import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold">Welcome to TalentBoard Hub!</h1>
        <p className="text-lg mt-4">Join now and find your perfect match.</p>
      </header>
      {children}
    </div>
  );
}
