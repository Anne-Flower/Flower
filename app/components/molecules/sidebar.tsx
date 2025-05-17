import Mentions from "../atoms/mentions";
import Tab from "../atoms/tab";

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 w-[148px] h-screen bg-[#f5efef]
      border-r-[2px] border-[#CCADAD] flex flex-col justify-start pt-8">
      <nav className="pt-[145px]" role="navigation" aria-label="Sidebar">
        <div className="border-t-[2px] border-[#CCADAD]"></div>

        <div className="relative hover:bg-[#ff875f] transition-colors hover:delay-130 delay-0  hover:shadow-[0_8px_10px_rgba(0,0,0,0.20)] hover:z-30">
          <div className="absolute bottom-0 left-0 w-full border-b-[2px] border-[#CCADAD] z-0" />
          <div className="transition-transform hover:translate-x-8 duration-600 ease-in-out relative z-10">
            <Tab href="/about" label="About me" color="#687ce8" />
          </div>
        </div>

        <div className="relative hover:bg-[#ff6937] transition-colors hover:delay-130 delay-0 hover:shadow-[0_8px_10px_rgba(0,0,0,0.20)] hover:z-30">
          <div className="absolute bottom-0 left-0 w-full border-b-[2px] border-[#CCADAD] z-0" />
          <div className="transition-transform hover:translate-x-8 duration-600 ease-in-out relative z-10">
            <Tab href="/projects" label="Projets" color="#3550e1" />
          </div>
        </div>

        <div className="relative hover:bg-[#ed4e29] transition-colors hover:delay-130 delay-0 hover:shadow-[0_8px_10px_rgba(0,0,0,0.20)] hover:z-30">
          <div className="absolute bottom-0 left-0 w-full border-b-[2px] border-[#CCADAD] z-0" />
          <div className="transition-transform hover:translate-x-8 duration-600 ease-in-out relative z-10">
            <Tab href="/capsules" label="Capsules" color="#0324d9" />
          </div>
        </div>
      </nav>
      <Mentions />
    </aside>
  );
}

