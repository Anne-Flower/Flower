import Menu from "@/components/atoms/menu";
import { Metadata } from "next";
// import { useState } from "react";

export const metadata: Metadata = {
  title: "Projects | Anne-Flore Bernard",
  description: "Full-stack developer guided by art, logic, and play. Discover Anne-Flore Bernard’s projects, here you will find her web site projects.",
};

const ProjectPage = () => {

    // const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <main className="pl-[206px] pt-[175px] max-w-[1400px]" role="main"
      aria-labelledby="projects-heading">
      <section className=" border-b-[1px] border-[#bf9899]" aria-label="List of projects">
        <Menu label={"Projet"} color={"#687ce8"}  />
        <Menu label={"Projet"} color={"#3550e1"}  />
        <Menu label={"Projet"} color={"#0324d9"}  />
        <Menu label={"Projet"} color={"#021ba3"}  />
        <Menu label={"Projet"} color={"#3550e1"}  />
        <Menu label={"Projet"} color={"#0324d9"}  />
      </section>
    </main>
  );
};

export default ProjectPage;
