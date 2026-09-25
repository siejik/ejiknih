import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { wedding } from "@/data/wedding";

type Props = {
  onOpen: () => void;
};

export default function Cover({ onOpen }: Props) {
  return (
    <div className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 py-8">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/60" />
      <motion.div
        animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#d9be82]/20 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#809b88]/20 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 25, scale: .96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: .9, delay: .7 }}
        className="glass relative z-10 flex min-h-[78svh] w-full max-w-md flex-col items-center justify-between overflow-hidden rounded-[32px] px-7 py-10 text-center"
      >
        <div className="pt-3">
          <p className="text-[10px] uppercase tracking-[.5em] text-white/65">
            The Wedding Of
          </p>
        </div>

        <div>
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#d9be82]/60" />
            <Heart size={15} className="fill-[#d9be82] text-[#d9be82]" />
            <span className="h-px w-10 bg-[#d9be82]/60" />
          </div>

          <h1 className="font-serif text-6xl leading-none tracking-tight text-white sm:text-7xl">
            {wedding.groom.name}
          </h1>
          <div className="my-3 font-serif text-3xl italic text-[#d9be82]">&</div>
          <h1 className="font-serif text-6xl leading-none tracking-tight text-white sm:text-7xl">
            {wedding.bride.name}
          </h1>

          <p className="mt-7 text-sm text-white/70">{wedding.date}</p>
        </div>

        <div>
          <button
            onClick={onOpen}
            className="group rounded-full border border-white/20 bg-white/10 px-7 py-3 text-xs font-medium uppercase tracking-[.25em] text-white shadow-2xl backdrop-blur-xl transition hover:bg-white/20 active:scale-95"
          >
            <span className="flex items-center gap-3">
              Buka Undangan
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </button>
          <p className="mt-4 text-[10px] text-white/40">Tap untuk membuka</p>
        </div>
      </motion.div>
    </div>
  );
}