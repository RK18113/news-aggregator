// src/components/AppShell.jsx
export default function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-black flex justify-center">
      <div className="relative w-full max-w-[430px] min-h-screen flex flex-col bg-transparent overflow-hidden">
        {children}
      </div>
    </div>
  );
}
