import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";

function ExperienceSection() {
  return (
    <section
      id="experience"
      class="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading 
        title="Experience"
        subtitle="Where I have learned and worked."
      />
      <ol class="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2024 - Present"
          title="Bachelor of Science in Information Technology"
          place="Cebu Institute of Technology - University"
          description="Taking up web development, databases, and systems analysis."
        />
        <TimelineItem
          period="2025 - 2026"
          title="Salamisim Dance Troupe - Secretary"
          place="CITU Dance Hall"
          description="Managed the dance troupe's administrative tasks, coordinated rehearsals and data related activities."
        />
        <TimelineItem
          period="2022 - 2024"
          title="Senior High School, STEM Strand"
          place="University of Cebu - Lapu-Lapu and Mandaue"
          description="Was on a Robotics team and participated in competitions. Learned programming, electronics, and problem solving."
        />
      </ol>
    </section>
  );
}

export default ExperienceSection;
