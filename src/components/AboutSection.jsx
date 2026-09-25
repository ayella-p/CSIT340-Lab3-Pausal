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
        Taking up BS Information Technology especially at CIT-U which is very far from where I live is a big step for me. 
        I was not sure of this course at first, but I am now in the process of learning to love and to embrace my decision. 
        I am still figuring out what I want to do in the future, but I am sure that I want it related to this course.
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
