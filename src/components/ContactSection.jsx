import SectionHeading from "./SectionHeading";
import ContactLink from "./ContactLink";

function ContactSection() {
  return (
    <section
      id="contact"
      class="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul class="mt-8 space-y-3">
        <ContactLink
          label="Email"
          href="mailto:ayella.pausal@cit.edu"
          text="ayella.pausal@cit.edu"
        />
        <ContactLink
          label="GitHub"
          href="https://github.com/ayella-p"
          text="github.com/ayella-p"
        />
        <ContactLink
          label="LinkedIn"
          href="https://www.linkedin.com/in/ayella-pausal"
          text="linkedin.com/in/ayella-pausal"
        />
      </ul>
    </section>
  );
}

export default ContactSection;
