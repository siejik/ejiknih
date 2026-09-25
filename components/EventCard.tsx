import { CalendarDays, Clock3, MapPin } from "lucide-react";

type Props = {
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
};

export default function EventCard({ title, date, time, location, address }: Props) {
  return (
    <div className="glass rounded-3xl p-5">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-serif text-2xl text-[#d9be82]">{title}</h3>
        <div className="rounded-full bg-white/10 px-3 py-1 text-[9px] uppercase tracking-widest text-white/50">
          Wedding
        </div>
      </div>
      <div className="space-y-3 text-sm text-white/70">
        <div className="flex gap-3"><CalendarDays size={17} className="mt-0.5 text-[#d9be82]" /><span>{date}</span></div>
        <div className="flex gap-3"><Clock3 size={17} className="mt-0.5 text-[#d9be82]" /><span>{time}</span></div>
        <div className="flex gap-3"><MapPin size={17} className="mt-0.5 text-[#d9be82]" /><span>{location}<br /><small className="text-white/40">{address}</small></span></div>
      </div>
    </div>
  );
}