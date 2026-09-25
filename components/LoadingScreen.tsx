"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.15, duration: .7 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0b1110] pointer-events-none"
    >
      <div className="text-center">
        <div className="mb-4 text-[10px] tracking-[.45em] uppercase text-[#d9be82]">
          The Wedding Of
        </div>
        <div className="font-serif text-4xl text-white">Raka & Alya</div>
        <div className="mx-auto mt-5 h-px w-20 bg-[#d9be82]/60" />
      </div>
    </motion.div>
  );
}