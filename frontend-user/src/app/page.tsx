"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MapPin, Clock, Utensils, Navigation } from "lucide-react";

export default function Home() {
  const [qrKey, setQrKey] = useState(0);

  // Simulate dynamic QR refresh every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setQrKey(prev => prev + 1);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="p-6 pt-12 flex flex-col gap-6">
      <header className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Welcome, Akira</h1>
          <p className="text-sm text-gray-400">Nagasaki Stadium City</p>
        </div>
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-neon to-blue-600 p-0.5">
          <div className="w-full h-full rounded-full bg-obsidian flex items-center justify-center">
            <span className="font-bold text-sm">AK</span>
          </div>
        </div>
      </header>

      {/* Dynamic Ticket Component */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel rounded-3xl p-6 relative overflow-hidden shadow-[0_0_40px_rgba(0,240,255,0.15)]"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon to-transparent"></div>
        <div className="flex justify-between items-start">
          <div>
            <span className="text-xs uppercase tracking-widest text-neon font-semibold mb-1 block">Live Event</span>
            <h2 className="text-xl font-bold">Championship Finals</h2>
            <p className="text-sm text-gray-300 mt-1 flex items-center gap-1">
              <Clock size={14} className="text-gray-400" /> Starts in 45 mins
            </p>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-2xl p-4 flex flex-col items-center justify-center">
          {/* Simulated QR Code that "refreshes" */}
          <motion.div 
            key={qrKey}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring" }}
            className="w-40 h-40 bg-[url('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=SMART_STADIUM_DYNAMIC_HASH')] bg-center bg-no-repeat mb-2"
          />
          <div className="flex items-center gap-2 text-xs text-black/60 font-medium bg-gray-100 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Dynamic QR Valid (Refreshes in 30s)
          </div>
        </div>

        <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/10">
          <div>
            <span className="block text-xs text-gray-400 mb-1">Gate</span>
            <span className="font-bold text-lg">C</span>
          </div>
          <div>
            <span className="block text-xs text-gray-400 mb-1">Block</span>
            <span className="font-bold text-lg">114</span>
          </div>
          <div>
            <span className="block text-xs text-gray-400 mb-1">Seat</span>
            <span className="font-bold text-lg">22F</span>
          </div>
        </div>
      </motion.div>

      {/* Smart Suggestions */}
      <h3 className="text-lg font-semibold mt-4">Smart Concierge</h3>
      <div className="grid grid-cols-2 gap-4">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="glass-panel p-4 rounded-2xl flex flex-col items-start gap-3 text-left hover:bg-white/5 transition-colors"
        >
          <div className="p-2.5 bg-neon/10 rounded-xl text-neon">
            <Utensils size={20} />
          </div>
          <div>
            <h4 className="font-medium text-sm">Order Food</h4>
            <p className="text-xs text-gray-400 mt-0.5">Wait: ~3 mins</p>
          </div>
        </motion.button>
        
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="glass-panel p-4 rounded-2xl flex flex-col items-start gap-3 text-left hover:bg-white/5 transition-colors"
        >
          <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-400">
            <Navigation size={20} />
          </div>
          <div>
            <h4 className="font-medium text-sm">Find My Seat</h4>
            <p className="text-xs text-gray-400 mt-0.5">Fastest route</p>
          </div>
        </motion.button>
      </div>
    </main>
  );
}
