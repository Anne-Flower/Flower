"use client";

import { useState } from "react";
import Photo from "./components/atoms/photo";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const photoSections = Array.from({ length: 120 }, (_, i) => ({
    id: `photo-section-${i + 1}`,
    height: 40 + Math.floor(i / 10) * 6.36,
  }));

  return (
    <main
      className="w-full min-h-screen pt-0 bg-[#fff9f9] overflow-y-hidden"
      role="main"
      aria-label="Homepage with visual identity, logo and a short dynamic description"
    >
      <div
        className="grid grid-cols-10 gap-x-[0px] gap-y-[0px] place-items-center pl-[148px]  "
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(12, 18, 137, 0.05), rgba(12, 12, 145, 1))",
          maskImage:
            "linear-gradient(to bottom, rgba(24, 17, 159, 0.05), rgba(109, 85, 204, 1))",
          pointerEvents: "none",
        }}
      >
        {photoSections.map(({ id, height }) => (
          <section
            key={id}
            className="w-[129px]"
            style={{ height: `${height}px` }}
            aria-labelledby={id}
          >
            <h2 id={id} className="sr-only">
              Photo and identity
            </h2>
            <Photo />
          </section>
        ))}
      </div>

      <aside className="absolute top-[172px] right-[125px]">
        <p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="font-['IBM_Plex_Mono'] text-[20px] text-[#664060] leading-[26px] tracking-wide transition-all duration-300"
        >
          <span className="block">Full Stack</span>
          <span className="block">
            developer{" "}
            <span className="block w-[90px]">
              {isHovered ? "logic" : "creative"}
            </span>
          </span>
        </p>
      </aside>
    </main>
  );
}
