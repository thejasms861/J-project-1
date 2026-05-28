import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Stadium | Fan Experience",
  description: "Your digital concierge for the ultimate stadium experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-obsidian text-white min-h-screen">
        <div className="max-w-md mx-auto relative min-h-screen pb-20 shadow-2xl bg-obsidian border-x border-white/5">
          {children}
          
          {/* Mobile Bottom Navigation */}
          <nav className="fixed bottom-0 w-full max-w-md mx-auto glass-panel border-t border-white/10 px-6 py-4 flex justify-between items-center z-50 rounded-t-2xl">
            <button className="flex flex-col items-center text-neon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <span className="text-[10px] font-medium mt-1">Home</span>
            </button>
            <button className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              <span className="text-[10px] font-medium mt-1">Order</span>
            </button>
            <button className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="12" y1="8" x2="12" y2="8.01"/><line x1="16" y1="8" x2="16" y2="8.01"/><line x1="8" y1="8" x2="8" y2="8.01"/></svg>
              <span className="text-[10px] font-medium mt-1">AI Guide</span>
            </button>
            <button className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <span className="text-[10px] font-medium mt-1">Profile</span>
            </button>
          </nav>
        </div>
      </body>
    </html>
  );
}
