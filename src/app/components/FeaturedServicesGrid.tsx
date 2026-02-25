"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const featuredServices = [
  {
    label: "Most Popular",
    name: "Full Lace Wig Install",
    price: "from £150",
    duration: "2.5–3h",
    image: "/gallery/post-1.jpg",
  },
  {
    label: "Trending",
    name: "Frontal Ponytail",
    price: "from £120",
    duration: "1.5h",
    image: "/gallery/post-5.jpg",
  },
  {
    label: "Wig Making",
    name: "180 Frontal Wig",
    price: "from £120",
    duration: "7 days",
    image: "/gallery/post-7.jpg",
  },
  {
    label: "Sew-In",
    name: "Lace Frontal Sew-In",
    price: "from £150",
    duration: "2.5–3h",
    image: "/gallery/post-2.jpg",
  },
  {
    label: "Colour",
    name: "Colour Service",
    price: "from £200",
    duration: "Varies",
    image: "/gallery/post-6.jpg",
  },
];

export default function FeaturedServicesGrid() {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, name: string) => {
    e.preventDefault();
    router.push(`?service=${encodeURIComponent(name)}`, { scroll: false });
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
      {featuredServices.map((card, index) => (
        <a
          key={card.name}
          href={`?service=${encodeURIComponent(card.name)}#booking`}
          onClick={(e) => handleClick(e, card.name)}
          className={`relative overflow-hidden group ${
            index === 0
              ? "md:col-span-2 min-h-64 md:min-h-95"
              : index === 1
              ? "min-h-64 md:min-h-95"
              : "min-h-48 md:min-h-60"
          }`}
        >
          <Image
            src={card.image}
            alt={card.name}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/10" />
          <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#ff5a1f]">
              {card.label}
            </p>
            <div>
              <h3
                className={`font-display font-bold leading-tight text-white mb-3 ${
                  index === 0 ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"
                }`}
              >
                {card.name}
              </h3>
              <div className="flex items-end justify-between">
                <div>
                  <p className="font-display text-xl md:text-2xl font-black text-[#ff5a1f]">
                    {card.price}
                  </p>
                  <p className="text-[10px] tracking-widest uppercase mt-1 text-white/65">
                    {card.duration}
                  </p>
                </div>
                <span className="text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white">
                  →
                </span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
