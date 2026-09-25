use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "./LoadingScreen";
import Cover from "./Cover";
import WeddingContent from "./WeddingContent";
import MusicPlayer from "./MusicPlayer";

export default function Invitation() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="page-bg min-h-screen">
      <LoadingScreen />
      <div className="noise" />

      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="cover"
            initial={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -92, opacity: 0 }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left center", perspective: 1800 }}
            className="relative z-20 min-h-screen"
          >
            <Cover onOpen={() => setOpened(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, scale: .96, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}
          >
            <WeddingContent />
          </motion.div>
        )}
      </AnimatePresence>

      <MusicPlayer enabled={opened} />
    </div>
  );
}