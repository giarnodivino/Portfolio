const ProjectCard = ({title, description, link, src}) => {
  return (
    <div className="bg-[#222222] rounded-2xl p-6 shadow-lg shadow-black/30 hover:shadow-black/50 transition-shadow flex flex-col">
      <h2 className="text-3xl text-white bebas mb-4">{title}</h2>
      <p className="text-[#C7C7C7] text-xl font-thin mb-6">{description}</p>
      <img src={src} alt="" className="rounded-2xl mb-5" />
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#D3E97A] text-lg font-semibold hover:underline mt-auto"
      >
        Github ↗
      </a>
    </div>
  );
};

const ExperienceCard = ({position, time, company, details}) => {
  return (
    <div className="p-4 flex flex-col mb-4">
      <p className="text-white text-xl">{position}</p>
      <p className="text-[#C7C7C7] text-lg">{time}</p>
      <p className="text-[#D3E97A] text-lg font-medium">{company}</p>
      <p className="text-[#C7C7C7] text-lg pt-2">{details}</p>
    </div>
  );
};

const LangCards = (color) => {
  return <div></div>;
};

export {ProjectCard, ExperienceCard};
