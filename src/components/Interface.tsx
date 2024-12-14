import { Settings, Info } from 'lucide-react';
import { useState } from 'react';

export function Interface() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div className="absolute top-0 left-0 w-full p-4 text-white z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">NYC 3D Visualization</h1>
          <div className="flex gap-4">
            <button 
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setShowInfo(!showInfo)}
            >
              <Info size={24} />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <Settings size={24} />
            </button>
          </div>
        </div>
        
        {showInfo && (
          <div className="absolute top-20 right-4 bg-black/80 p-6 rounded-lg max-w-md">
            <h2 className="text-xl font-bold mb-4">Notable Landmarks</h2>
            <ul className="space-y-2">
              <li>🏛️ Empire State Building</li>
              <li>🗽 One World Trade Center</li>
              <li>✨ Chrysler Building</li>
              <li>🏢 30 Rockefeller Plaza</li>
              <li>🌆 432 Park Avenue</li>
            </ul>
            <div className="mt-4 text-sm opacity-80">
              Features realistic building heights and distinct NYC districts
            </div>
          </div>
        )}
      </div>
      
      <div className="absolute bottom-4 left-4 text-white text-sm opacity-70">
        Use mouse to orbit • Scroll to zoom • Drag to pan
      </div>
    </>
  );
}