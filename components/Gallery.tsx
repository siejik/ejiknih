import Image from "next/image";

export default function Gallery({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {images.map((src, i) => (
        <div key={src} className={`relative overflow-hidden rounded-3xl ${i === 1 || i === 2 ? "aspect-[4/5]" : "aspect-[4/5]"}`}>
          <Image
            src={src}
            alt={`Foto Raka dan Alya ${i + 1}`}
            fill
            className="object-cover transition duration-700 hover:scale-105"
            sizes="(max-width: 768px) 50vw, 300px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      ))}
    </div>
  );
}