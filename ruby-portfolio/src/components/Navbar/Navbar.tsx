export const Navbar = () => {
  return (
    <nav
      className="w-full fixed top-0 z-50 flex justify-between items-center px-8 py-5 transition-all"
    >
      <div className="font-serif text-xl font-semibold bg-gradient-to-r from-[#87BAC3] to-[#53629E] bg-clip-text text-transparent">
        Mathilde R.
      </div>

      <ul className="flex gap-8 text-sm text-gray-500">
        <li><a href="#about" className="hover:text-black">About</a></li>
        <li><a href="#projects" className="hover:text-black">Work</a></li>
        <li><a href="#contact" className="hover:text-black">Contact</a></li>
      </ul>
    </nav>
  );
}