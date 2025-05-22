"use client";

import Image from "next/image";
import { useState } from "react";

type MenuProps = {
  label: string;
  color: string;
  text?: string;
  images?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  }[];
};

const Menu = ({ label, color, text, images = [] }: MenuProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative border border-[#bf9899] py-6 px-4 flex items-stretch border-b-0">
      <span
        className="w-[22px] h-full absolute left-0 top-0 bottom-0"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />

      <div
        className="pl-6 pr-10 w-full font-['IBM_Plex_Mono'] text-[14px] text-[#400F38]"
        onClick={() => setOpen(!open)}
      >
        <div className="relative list-none cursor-pointer text-[16px] flex justify-between items-center">
          {label}
          <span className="transition-transform duration-300 ml-2 text-[#bf9899]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-[#687ce8]"
              >
              <path d="M12 16l-6-6h12z" />
            </svg>
          </span>
        </div>
              {open && (

          <div className="pt-4 cursor-pointer">
            {text ? (
              <a
                href={text}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0324d9] underline decoration-[0.2px] underline-offset-4 hover:text-[#300c2a] transition-colors"
              >
                To see
              </a>
            ) : (
              <span>Coming</span>
            )}

            {images.map((img, idx) => (
              <Image
                key={idx}
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className={img.className}
              />
            ))}
          </div>
          )}
      </div>
    </div>
  );
};

export default Menu;
