import SectionHeading from "./SectionHeading";
import Fact from "./Fact";

function AboutSection() {
  return (
    <section
      id="about"
      class="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading title="About" subtitle="A little about who I am." />
      <p class="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I was raised in Cordova, choosing to pursue a BS in Information Technology at CIT-U was a massive step out of my comfort zone, especially given the distance from home. While I was initially unsure about my choice of major, I am actively learning to genuinely love and embrace the IT field. I may still be figuring out my exact career path, but I am absolutely certain my future lies somewhere in the tech world.
      </p>
      <dl class="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <Fact label="Course" value="BS Information Technology" />
        <Fact label="Year Level" value="Third year" />
        <Fact label="School" value="CIT-U" />
        <Fact label="Based in" value="Cebu City" />
      </dl>
    </section>
  );
}

export default AboutSection;
