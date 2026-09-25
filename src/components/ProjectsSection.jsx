import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <section
      id="projects"
      class="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div class="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2025"
          title="Fast-Fued: A Turn-based Fighting Game"
          description="A turn-based fighting game where players can choose from a variety of characters and fight against each other."
          tech="Java · HTML · Shell"
          link="https://github.com/WengCitGit/OOP2-FINALPROJECT"
        />
        <ProjectCard
          year="2025"
          title="Outbreak: Text-based Turn-based Game"
          description="A text-based turn-based game inspired by the popular outbreak mechanic."
          tech="Java · OOP"
          link="https://github.com/ayella-p/Outbreak"
        />
        <ProjectCard
          year="2025"
          title="Cake Maker: A Stack Game"
          description="A stack game for cake making, where you have to stack ingredients to make a cake."
          tech="GDScript · Godot"
          link="https://github.com/ayella-p/Cake-Maker"
        />
        <ProjectCard
          year="2026"
          title="GreenLane AI — Customs Selectivity & Document Validator"
          description="Turns raw import documents into automated customs lane recommendations (Green/Yellow/Red)."
          tech="Python"
          link="https://github.com/ayella-p/customs-validator"
        />
      </div>
    </section>
  );
}

export default ProjectsSection;
