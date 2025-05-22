"use client";

import Image from 'next/image'


type MenuProps = {
  label: string;
  color: string;
  text?:string;
};

const Menu = ({ label, color, text }: MenuProps) => {
  return (
    <div className="relative border border-[#bf9899] py-6 px-4 flex items-stretch border-b-0">
      <span
        className="w-[22px] h-full absolute left-0 top-0 bottom-0"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />

      <details
        name="accordion"
        className="pl-6 pr-10 w-full font-['IBM_Plex_Mono'] text-[14px] text-[#400F38]"
      >
        <summary className="relative list-none cursor-pointer text-[16px] flex justify-between items-center">
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
        </summary>

        <div className="pt-4">{text ? (
            <a
              href={text}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0324d9] underline decoration-[0.2px] underline-offset-4 hover:text-[#ed4e29] transition-colors"
            >
              To see
            </a> ) : (
            <span>Coming</span>
          )}
          <Image src="/assets/chloe.png" alt="oeuvres de Chloé Guillermin" width={290} height={110} className='absolute right-60 top-0 h-[110px]'/>
          <Image src="/assets/chloeBis.png" alt="oeuvres de Chloé Guillermin" width={270} height={110} className='absolute right-132 top-0 h-[110px]'/>

        </div>
      </details>
    </div>
  );
};

export default Menu;
