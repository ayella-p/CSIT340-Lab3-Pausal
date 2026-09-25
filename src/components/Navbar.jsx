import NavLink from "./NavLink";

function Navbar() {
  return (
    <nav class="sticky top-0 z-10 border-b border-stone-200 bg-white">
      <div class="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" class="font-semibold">
          Ayella A. Pausal
        </a>
        <ul class="flex list-none gap-6 text-sm text-stone-600">
          <NavLink href="#about" text="About" />
          <NavLink href="#skills" text="Skills" />
          <NavLink href="#projects" text="Projects" />
          <NavLink href="#experience" text="Experience" />
          <NavLink href="#contact" text="Contact" />
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
