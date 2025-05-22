"use client";

import Menu from "@/components/atoms/menu";

const projects = [
  { label: "Portfolio Chloé Guillermin Artist", color: "#687ce8", text: "https://nimble-pika-71f28f.netlify.app/", images: [
      { src: "/assets/chloe.png", alt: "Chloé", width: 290, height: 110, className: "absolute right-[228px] top-1 h-[110px]" },
      { src: "/assets/chloeBis.png", alt: "Chloé", width: 270, height: 110, className: "absolute right-132 top-0 h-[110px]" }
    ]
  },
  { label: "Movies project", color: "#3550e1", text: "https://github.com/abernardArtefact/movieProject" },
  { label: "Portfolio Dweezil Sèche Designer", color: "#0324d9", text: "" },
  { label: "To do List", color: "#021ba3", text: "" },
  { label: "je ne sais pas", color: "#3550e1", text: "" },
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
          <Menu key={index} label={project.label} color={project.color} text={project.text} images={project.images}/>
        ))}
      </section>
    </main>
  );
};

export default ProjectPage;
