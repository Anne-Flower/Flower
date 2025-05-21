'use client'

import { useState } from "react"
import Photo from "./components/atoms/photo"

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <main
      className="flex w-full h-full overflow-hidden"
      role="main"
      aria-label="Homepage with visual identity, logo and a short dynamic description"
    >
      <section
        className="w-full max-w-[968px] ml-[208px] mb-42"
        aria-labelledby="photo-section"
      >
        <h2 id="photo-section" className="sr-only">Photo and identity</h2>
        <Photo />
      </section>

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
  )
}
