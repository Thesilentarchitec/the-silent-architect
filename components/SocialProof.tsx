"use client";

import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

const cities = ["San Francisco", "Berlin", "Tokyo", "London", "Austin", "New York", "Paris", "Singapore", "Seoul", "Amsterdam"];

export default function SocialProof() {
  const [show, setShow] = useState(false);
  const [city, setCity] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCity(cities[Math.floor(Math.random() * cities.length)]);
      setShow(true);
      
      // Auto hide after 10 seconds
      setTimeout(() => setShow(false), 10000);
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-24 right-6 z-[60] animate-in slide-in-from-right-full duration-700">
      <div className="bg-black/80 backdrop-blur-md border border-white/10 p-4 flex items-center gap-4 shadow-2xl">
        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
          <CheckCircle className="text-gold" size={18} />
        </div>
        <div>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-0.5">Verification Successful</p>
          <p className="text-sm text-white font-medium">
            Someone from <span className="text-gold">{city}</span> just secured the blueprint.
          </p>
        </div>
      </div>
    </div>
  );
}
