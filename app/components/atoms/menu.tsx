"use client";

import { useState } from "react";

type MenuProps = {
  label: string;

};

const Menu = ({ label }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main >
      <header className={`relative border border-[#bf9899] py-6 px-4 flex items-stretch ${isOpen ? "border-b-[1px]" : "border-b-0"}`}>
        <span className="w-[22px] bg-[#0324d9] h-full absolute left-0 top-0 bottom-0" />

        <details
          open={isOpen}
          className="pl-6 pr-10 w-full font-['IBM_Plex_Mono'] text-[14px] text-[#400F38]"
          onToggle={(e) => setIsOpen(e.currentTarget.open)}
        >
          <summary className="relative list-none cursor-pointer text-[16px] text-[#400F38] flex justify-between items-center">
            {label}
            <span
              className={`transition-transform duration-300 ml-2 text-[#bf9899]  ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              +
            </span>
          </summary>

          <div className="pt-4">
            Ceci est du texte de projet.
          </div>
        </details>
      </header>
    </main>
  );
};

export default Menu;
