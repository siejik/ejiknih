use client";

import { Copy, Check, WalletCards } from "lucide-react";
import { useState } from "react";

export default function DigitalEnvelope({
  bank,
  qris,
}: {
  bank: { name: string; account: string; owner: string };
  qris: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard?.writeText(bank.account);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="space-y-4">
      <div className="glass rounded-3xl p-5">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-2xl bg-[#d9be82]/10 p-3 text-[#d9be82]"><WalletCards size={20} /></div>
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40">Amplop Digital</p>
            <h3 className="font-serif text-xl">{bank.name}</h3>
          </div>
        </div>
        <div className="rounded-2xl bg-black/20 p-4">
          <p className="text-2xl tracking-widest">{bank.account}</p>
          <p className="mt-1 text-xs text-white/45">a.n. {bank.owner}</p>
        </div>
        <button onClick={copy} className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/10 py-3 text-sm hover:bg-white/15">
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? "Berhasil disalin" : "Salin nomor rekening"}
        </button>
      </div>

      <div className="glass rounded-3xl p-5 text-center">
        <p className="mb-4 text-xs uppercase tracking-widest text-white/45">QRIS</p>
        <img src={qris} alt="QRIS" className="mx-auto w-52 rounded-2xl bg-white p-2" />
      </div>
    </div>
  );
}