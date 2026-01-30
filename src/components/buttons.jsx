function ContactButton() {
  return (
    <a
      href="#contact"
      className="inline-flex items-center justify-between gap-3 px-4 py-2 rounded-full bg-[#C4C4C4] text-black font-normal hover:opacity-90 transition-opacity w-fit"
    >
      <span>CONTACT ME</span>
      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white">↗</span>
    </a>
  );
}

export default ContactButton;
