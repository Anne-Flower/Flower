import Menu from "@/components/atoms/menu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Anne-Flore Bernard",
  description: "Full-stack developer guided by art, logic, and play. Discover Anne-Flore Bernard’s projects, here you will find her web site projects.",
};

const ProjectPage = () => {
  return (
    <main className="pl-[206px] pt-[175px] max-w-[1400px]" role="main"
      aria-labelledby="projects-heading">
      <section className=" border-b-[1px] border-[#bf9899]" aria-label="List of projects">
        <Menu label={"Projet"}  />
        <Menu label={"Projet"}  />
        <Menu label={"Projet"}  />
        <Menu label={"Projet"}  />
        <Menu label={"Projet"}  />
        <Menu label={"Projet"}  />
        <Menu label={"Projet"}  />
      </section>
    </main>
  );
};

export default ProjectPage;
