import Mentions from "../atoms/mentions";
import Tab from "../atoms/tab";

export default function Sidebar() {
  return (
    <aside
      className="fixed top-0 left-0 w-[148px] h-screen bg-[#f5efef]
      border-r-[2px] border-[#CCADAD] flex flex-col justify-start pt-8">
      <nav className="pt-[145px]" role="navigation" aria-label="Sidebar">
        <div className="border-t-[2px] border-[#CCADAD]"></div>
        <Tab href="/about" label="About me" color={"#687ce8"} />
        <Tab href="/projects" label="Projets" color={"#3550e1"} />
        <Tab href="/capsules" label="Capsules" color={"#0324d9"} />
      </nav>
      <Mentions/>
    </aside>
  );
}
