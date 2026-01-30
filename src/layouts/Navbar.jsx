import {useState} from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#504141]">
      {/* Top bar */}
      <div className="mx-auto flex h-19 pt-3 lg:h-25 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <h1 className="bebas text-[#C7C7C7] text-3xl">GIARNO DIVINO</h1>

        {/* Mobile toggle */}
        <button
          type="button"
          className="p-2 hover:opacity-80 transition-opacity text-[#C7C7C7] md:hidden"
          aria-controls="navbar"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 7h14M5 12h14M5 17h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <a href="#about" className="font-bold text-[#C7C7C7] hover:text-black">
            About
          </a>
          <a href="#projects" className="font-bold text-[#C7C7C7] hover:text-black">
            Projects
          </a>
          <a href="#experience" className="font-bold text-[#C7C7C7] hover:text-black">
            Experience
          </a>
          <a
            href="mailto:divinogiarno7@gmail.com"
            className="rounded-lg bg-[#D3E97A] px-5 py-4 text-sm font-extrabold text-black hover:bg-black/80"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Mobile dropdown (does NOT change navbar height) */}
      <div id="navbar" className={`${open ? "block" : "hidden"} md:hidden`}>
        <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6">
          <div className="rounded-xl border border-black/10 bg-white/90 p-2 shadow-sm backdrop-blur">
            <a
              href="#about"
              className="block rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-black/5"
              onClick={() => setOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="block rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-black/5"
              onClick={() => setOpen(false)}
            >
              Projects
            </a>
            <a
              href="#experience"
              className="block rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-black/5"
              onClick={() => setOpen(false)}
            >
              Experience
            </a>
            <a
              href="#contact"
              className="mt-2 block rounded-lg bg-[#D3E97A] px-3 py-2 text-center text-sm font-extrabold text-black hover:bg-black/80"
              onClick={() => setOpen(false)}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
