import SectionHeading from "./SectionHeading";
import SkillTag from "./SkillTag";

function SkillsSection() {
  return (
    <section
      id="skills"
      class="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading title="Skills" subtitle="What I work with." />
      <div class="mt-8 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 class="text-sm font-medium text-stone-500">Languages</h3>
          <div class="mt-3 flex flex-wrap gap-2">
            <SkillTag name="HTML" />
            <SkillTag name="JavaScript" />
            <SkillTag name="Java" />
            <SkillTag name="GDScript" />
          </div>
        </div>
        <div>
          <h3 class="text-sm font-medium text-stone-500">Frameworks</h3>
          <div class="mt-3 flex flex-wrap gap-2">
            <SkillTag name="React" />
            <SkillTag name="Tailwind CSS" />
            <SkillTag name="Bootstrap" />
          </div>
        </div>
        <div>
          <h3 class="text-sm font-medium text-stone-500">Tools</h3>
          <div class="mt-3 flex flex-wrap gap-2">
            <SkillTag name="Git" />
            <SkillTag name="VS Code" />
            <SkillTag name="MySQL" />
            <SkillTag name="Figma" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
