import { motion } from "framer-motion";
import { Heart, MapPin } from "lucide-react";
import { wedding } from "@/data/wedding";
import Countdown from "./Countdown";
import EventCard from "./EventCard";
import Gallery from "./Gallery";
import RSVP from "./RSVP";
import DigitalEnvelope from "./DigitalEnvelope";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function WeddingContent() {
  return (
    <main className="relative min-h-screen overflow-hidden px-5 pb-20 pt-12">
      <div className="mx-auto max-w-2xl">
        <motion.section variants={fade} initial="hidden" animate="show" className="text-center">
          <p className="text-[10px] uppercase tracking-[.45em] text-[#d9be82]">Assalamu&apos;alaikum</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
            Dengan penuh rasa syukur,<br />kami mengundang Anda
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/55">
            Tanpa mengurangi rasa hormat, kami mengharapkan kehadiran dan doa restu Bapak/Ibu/Saudara/i
            pada hari bahagia kami.
          </p>
        </motion.section>

        <motion.section initial="hidden" animate="show" variants={fade} transition={{ delay: .15 }} className="mt-12 text-center">
          <div className="glass rounded-[36px] px-6 py-10">
            <p className="text-xs uppercase tracking-[.35em] text-white/40">The Bride & Groom</p>
            <div className="mt-5 font-serif text-5xl text-[#d9be82]">{wedding.bride.name}</div>
            <div className="my-2 text-2xl italic text-white/50">&</div>
            <div className="font-serif text-5xl">{wedding.groom.name}</div>
            <div className="mx-auto my-7 h-px w-20 bg-[#d9be82]/50" />
            <p className="text-sm leading-7 text-white/55">{wedding.bride.parents}</p>
            <p className="text-sm leading-7 text-white/55">{wedding.groom.parents}</p>
          </div>
        </motion.section>

        <motion.section initial="hidden" animate="show" variants={fade} transition={{ delay: .25 }} className="mt-8">
          <div className="glass rounded-[36px] p-6">
            <div className="mb-4 flex justify-center"><Heart size={18} className="fill-[#d9be82] text-[#d9be82]" /></div>
            <blockquote className="text-center font-serif text-lg italic leading-8 text-white/75">
              “{wedding.quote}”
            </blockquote>
            <p className="mt-4 text-center text-[10px] uppercase tracking-[.3em] text-[#d9be82]">{wedding.quoteSource}</p>
          </div>
        </motion.section>

        <section className="mt-14">
          <SectionTitle eyebrow="Save The Date" title="Menuju Hari Bahagia" />
          <Countdown target={wedding.dateISO} />
        </section>

        <section className="mt-14">
          <SectionTitle eyebrow="Wedding Event" title="Detail Acara" />
          <div className="space-y-4">
            <EventCard {...wedding.akad} />
            <EventCard {...wedding.reception} />
          </div>
        </section>

        <section className="mt-14">
          <SectionTitle eyebrow="Location" title="Tempat Acara" />
          <div className="glass overflow-hidden rounded-3xl">
            <iframe title="Lokasi acara" src={wedding.mapsUrl} className="h-72 w-full border-0 grayscale-[.2]" loading="lazy" />
            <div className="flex items-center gap-3 p-5">
              <MapPin className="text-[#d9be82]" size={20} />
              <div>
                <p className="font-medium">{wedding.reception.location}</p>
                <p className="text-sm text-white/45">{wedding.reception.address}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <SectionTitle eyebrow="Our Moments" title="Galeri" />
          <Gallery images={wedding.gallery} />
        </section>

        <section className="mt-14">
          <SectionTitle eyebrow="Wedding Gift" title="Kirim Hadiah" />
          <DigitalEnvelope bank={wedding.bank} qris={wedding.qris} />
        </section>

        <section className="mt-14">
          <SectionTitle eyebrow="RSVP & Wishes" title="Ucapan & Doa" />
          <RSVP />
        </section>

        <footer className="mt-20 border-t border-white/10 pt-10 text-center">
          <Heart className="mx-auto fill-[#d9be82] text-[#d9be82]" size={17} />
          <p className="mt-4 font-serif text-2xl">Raka & Alya</p>
          <p className="mt-2 text-[10px] uppercase tracking-[.35em] text-white/30">Thank you for being part of our story</p>
        </footer>
      </div>
    </main>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-6 text-center">
      <p className="text-[9px] uppercase tracking-[.45em] text-[#d9be82]">{eyebrow}</p>
      <h2 className="mt-2 font-serif text-3xl">{title}</h2>
      <div className="gold-line mx-auto mt-4 h-px w-20 opacity-60" />
    </div>
  );
}