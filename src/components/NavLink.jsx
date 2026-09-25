function NavLink({ href, text }) {
  return (
    <li>
      <a href={href} class="hover:text-stone-900">
        {text}
      </a>
    </li>
  );
}
export default NavLink;