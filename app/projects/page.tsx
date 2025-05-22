"use client";

import Menu from "@/components/atoms/menu";

const projects = [
  { label: "Portfolio Chloé Guillermin", color: "#687ce8", text: "https://nimble-pika-71f28f.netlify.app/" },
  { label: "Projet 2", color: "#3550e1", text: "" },
  { label: "Projet 3", color: "#0324d9", text: "" },
  { label: "Projet 4", color: "#021ba3", text: "" },
  { label: "Projet 5", color: "#3550e1", text: "" },
  { label: "Projet 6", color: "#0324d9", text: "" },
];

const ProjectPage = () => {
  return (
    <main
      className="pl-[206px] pt-[175px] max-w-[1400px]"
      role="main"
      aria-labelledby="projects-heading"
    >
      <section
        className="border-b-[1px] border-[#bf9899]"
        aria-label="List of projects"
      >
        {projects.map((project, index) => (
          <Menu key={index} label={project.label} color={project.color} text={project.text} />
        ))}
      </section>
    </main>
  );
};

export default ProjectPage;
