use client";

import { useEffect, useState } from "react";

export default function Countdown({ target }: { target: string }) {
  const calculate = () => {
    const distance = new Date(target).getTime() - Date.now();
    if (distance <= 0) return { d: 0, h: 0, m: 0, s: 0 };
    return {
      d: Math.floor(distance / 86400000),
      h: Math.floor((distance / 3600000) % 24),
      m: Math.floor((distance / 60000) % 60),
      s: Math.floor((distance / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calculate);

  useEffect(() => {
    const timer = setInterval(() => setTime(calculate()), 1000);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="grid grid-cols-4 gap-2">
      {[
        ["Hari", time.d],
        ["Jam", time.h],
        ["Menit", time.m],
        ["Detik", time.s],
      ].map(([label, value]) => (
        <div key={label} className="glass rounded-2xl px-2 py-4 text-center">
          <div className="font-serif text-2xl text-[#d9be82]">{String(value).padStart(2, "0")}</div>
          <div className="mt-1 text-[9px] uppercase tracking-widest text-white/45">{label}</div>
        </div>
      ))}
    </div>
  );
}