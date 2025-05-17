'use client';

import { useState } from "react";
import Logo from "./components/atoms/logo";
import Name from "./components/atoms/name";
import Video from "./components/atoms/video";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <main className="flex w-full"
    role="main"
      aria-label="Section d'accueil avec logo et nom">
        <header className="flex items-center justify-left" id="site-title">
          <Logo/>
          <Name/> 
        </header>
        <div className="w-[1176px]">
          <Video/>
        </div>
        <div>
        <p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="font-['IBM_Plex_Mono'] text-[20px] absolute bottom-16 right-30 text-[#664060] leading-[26px] tracking-wide transition-all duration-300">
          <span className="block">Full Stack</span>
          <span className="block">
            developper{" "}
            <span className="inline-block w-[90px]">
              {isHovered ? "logic" : "creative"}
            </span>
          </span>
        </p>
      </div>
    </main>
  )
}
