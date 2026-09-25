use client";

import { Music, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function MusicPlayer({ enabled }: { enabled: boolean }) {
  const audio = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (enabled) audio.current?.play().catch(() => {});
  }, [enabled]);

  const toggle = () => {
    if (!audio.current) return;
    if (muted) audio.current.volume = 1;
    else audio.current.volume = 0;
    setMuted(!muted);
  };

  return (
    <>
      <audio ref={audio} src="/music/wedding.mp3" loop />
      <button onClick={toggle} aria-label="Toggle music" className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/40 text-[#d9be82] shadow-2xl backdrop-blur-xl">
        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
    </>
  );
}