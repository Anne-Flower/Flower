import Menus from "@/components/molecules/menus";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Anne-Flore Bernard",
  description:
    "Full-stack developer guided by art, logic, and play. Discover Anne-Flore Bernard’s projects.",
};

const ProjectPage = () => {
  return <Menus />;
};

export default ProjectPage;
