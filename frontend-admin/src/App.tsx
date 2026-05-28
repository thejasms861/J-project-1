import { useState } from 'react'

function App() {
  return (
    <div className="min-h-screen bg-obsidian text-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card flex flex-col">
        <div className="p-6">
          <h1 className="text-xl font-bold tracking-wider text-neon">STADIUM<span className="text-white">OPS</span></h1>
          <p className="text-xs text-muted-foreground mt-1">Nagasaki Command Center</p>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <a href="#" className="flex items-center space-x-3 bg-secondary px-3 py-2 rounded-md text-sm font-medium text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
            <span>Overview</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-secondary/50 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            <span>Vendors & Revenue</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:bg-secondary/50 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <span>Crowd Control</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="h-16 border-b border-border flex items-center justify-between px-8 bg-background">
          <h2 className="text-lg font-semibold">Live Dashboard</h2>
          <div className="flex items-center space-x-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-neon"></span>
            </span>
            <span className="text-sm font-medium">System Online</span>
          </div>
        </header>
        
        <div className="p-8 flex-1 overflow-auto bg-obsidian">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border p-6 rounded-xl shadow-lg">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Active Attendees</h3>
              <p className="text-3xl font-bold mt-2 text-white">24,592</p>
              <div className="mt-4 flex items-center text-xs text-neon">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                +12% since last hour
              </div>
            </div>
            <div className="bg-card border border-border p-6 rounded-xl shadow-lg">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Food Orders (Live)</h3>
              <p className="text-3xl font-bold mt-2 text-white">1,204</p>
              <div className="mt-4 flex items-center text-xs text-neon">
                Avg. Wait Time: 4.2 mins
              </div>
            </div>
            <div className="bg-card border border-border p-6 rounded-xl shadow-lg border-destructive/50">
              <h3 className="text-sm font-medium text-destructive uppercase tracking-wider flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                Congestion Alert
              </h3>
              <p className="text-xl font-bold mt-2 text-white">Gate C</p>
              <div className="mt-4 flex items-center text-xs text-muted-foreground">
                Routing fans to Gate D...
              </div>
            </div>
          </div>

          <div className="mt-8 bg-card border border-border rounded-xl h-96 flex items-center justify-center">
            <p className="text-muted-foreground">Stadium Heatmap Visualization Goes Here</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
