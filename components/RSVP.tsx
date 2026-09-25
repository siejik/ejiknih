use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

type Guest = { name: string; status: string; message: string };

export default function RSVP() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Hadir");
  const [message, setMessage] = useState("");
  const [guests, setGuests] = useState<Guest[]>([
    { name: "Dina", status: "Hadir", message: "Selamat menempuh hidup baru! 🤍" },
    { name: "Rizky", status: "Hadir", message: "Semoga menjadi keluarga yang sakinah." },
  ]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setGuests((prev) => [{ name, status, message }, ...prev]);
    setName("");
    setMessage("");
  };

  return (
    <div className="space-y-5">
      <form onSubmit={submit} className="glass rounded-3xl p-5">
        <div className="space-y-3">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama kamu" className="w-full rounded-2xl border border-white/10 bg-black/15 px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-[#d9be82]/50" />
          <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full rounded-2xl border border-white/10 bg-[#18201d] px-4 py-3 text-sm outline-none">
            <option>Hadir</option>
            <option>Belum dapat hadir</option>
          </select>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tulis ucapan & doa..." rows={3} className="w-full resize-none rounded-2xl border border-white/10 bg-black/15 px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-[#d9be82]/50" />
          <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#d9be82] py-3 text-sm font-semibold text-[#171712] transition hover:brightness-110">
            <Send size={16} /> Kirim Ucapan
          </button>
        </div>
      </form>

      <div className="space-y-3">
        {guests.map((guest, i) => (
          <div key={`${guest.name}-${i}`} className="glass rounded-3xl p-4">
            <div className="flex items-center justify-between">
              <p className="font-medium">{guest.name}</p>
              <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[9px] uppercase tracking-wider text-emerald-300">{guest.status}</span>
            </div>
            {guest.message && <p className="mt-2 text-sm leading-6 text-white/55">{guest.message}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}