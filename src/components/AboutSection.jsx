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
        I am an aspiring tech professional from Cordova, currently pursuing my
        BS in Information Technology at CIT-U. My journey into IT is driven by a
        willingness to step outside my comfort zone and a growing passion for
        problem-solving. I am actively building my technical foundation and am
        eager to apply my skills to real-world challenges.{" "}
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
