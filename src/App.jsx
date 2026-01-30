import {useState} from "react";
import "./styles/App.css";
import Navbar from "./layouts/Navbar.jsx";
import ContactButton from "./components/buttons.jsx";
import {LinkedIn, Github, Tailwind, Django, JavaScript, Python, HTML, CSS, ReactJS} from "./components/svg-icons.jsx";
import Me from "./assets/images/pic2.jpeg";
import {ProjectCard, ExperienceCard} from "./components/cards.jsx";
import Proj1 from "./assets/images/jnfsample.png";
import Proj2 from "./assets/images/objdetect.png";

function App() {
  const [count, setCount] = useState(0);
  const Silveredge = {
    position: "Freelance Web Developer",
    time: "Aug 2025 - Dec 2025",
    company: "Silver Edge Corporation",
    details: [
      "Developed the company website using ReactJS and Tailwind CSS.",
      " Collaborated with stakeholders on new features and design.",
    ],
  };
  const GDSC = {
    position: "Project Development Officer",
    time: "Oct 2024 - May 2025",
    company: "Google Developer Student Clubs - Loyola",
    details: [
      "Responsible for providing input and feedback to improve projects as well as contribute to brainstorming, designing, and testing in the implementation of projects and websites.",
    ],
  };

  return (
    <>
      <Navbar />

      {/* WELCOME PAGE */}
      <section id="home">
        <div className="flex flex-col gap-2 md:grid md:grid-cols-4 md:items-center md:p-4 lg:grid-cols-8">
          <div className="flex flex-col md:col-span-2 lg:col-span-3 lg:col-start-2">
            <div className="flex flex-col m-4 pt-5">
              <h1 className="text-6xl text-white bebas">Hi, I am</h1>
              <h1 className="text-6xl text-white bebas">GIARNO DIVINO</h1>
            </div>
            <p className="text-xl text-[#C7C7C7] font-thin ml-4 mr-4 mt-1">
              An aspiring web developer passionate about building accessible and user friendly websites.
            </p>
            <div className="pt-7 pl-4 flex gap-3">
              <ContactButton />
              <LinkedIn link="https://www.linkedin.com/in/giarnodivino/" />
              <Github link="https://github.com/giarnodivino" />
            </div>
          </div>
          <div className="p-4 md:col-span-2 lg:col-span-3">
            <img
              src={Me}
              alt="Giarno Divino"
              className="w-96 h-auto rounded-2xl mt-10 mb-10 shadow-lg shadow-black/30 md:w-2xl"
            />
          </div>
        </div>
      </section>

      {/* ABOUT PAGE */}
      <section id="about">
        <div className="flex flex-col md:grid md:grid-cols-3 mt-10 md:p-4 lg:grid-cols-8">
          <div className="md:col-span-4 lg:col-start-2 lg:col-span-3">
            <h1 className="text-5xl text-white bebas ml-4 mb-5 lg:text-6xl">ABOUT ME</h1>
          </div>
          <div className="md:col-span-2 lg:col-span-3">
            <p className="text-xl text-white font-thin ml-4 mr-4 mt-1 mb-4 lg:text-2xl">
              I am a 3rd year Management Information Systems student passionate about web development and building
              real-world projects.
            </p>
            <p className="text-lg text-[#C7C7C7] font-thin ml-4 mr-4 mt-1 mb-4 lg:text-xl">
              Throughout my studies and personal projects, I've enjoyed applying what I've learned to create practical
              projects — from developing websites using Django and React to helping my family business build an online
              presence.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS PAGE */}
      <section id="projects">
        <div className="md:p-4 lg:m-40">
          <h1 className="text-4xl text-white bebas ml-4 mt-10 mb-5 lg:text-5xl">FEATURED PROJECTS</h1>
          <div className="p-4 flex flex-col gap-4 md:grid md:grid-cols-2">
            <ProjectCard
              title="J&F Divino Website"
              description="Developed a responsive website for J&F Divino, a family-owned business, using ReactJS and Tailwind CSS to enhance their online presence and customer engagement."
              link="https://github.com/giarnodivino/jnf-react"
              src={Proj1}
            />
            <ProjectCard
              title="Object Detection with YOLOv5"
              description="Created an object detection system using YOLOv5 and OpenCV to identify and track objects in real-time video feeds."
              link="https://github.com/giarnodivino/counter-project"
              src={Proj2}
            />
          </div>
        </div>
      </section>

      {/* EXPERIENCE PAGE */}
      <section id="experience">
        <div className="lg:m-40 md:m-5">
          <h1 className="text-4xl text-white bebas ml-4 mt-10 mb-5 lg:text-5xl">MY EXPERIENCE</h1>
          <div className="lg:grid lg:grid-cols-2 gap-10">
            <ExperienceCard
              position={Silveredge.position}
              time={Silveredge.time}
              company={Silveredge.company}
              details={Silveredge.details}
            />
            <ExperienceCard position={GDSC.position} time={GDSC.time} company={GDSC.company} details={GDSC.details} />
          </div>
        </div>
      </section>

      {/* LANGUAGES AND FRAMEWORKS */}
      <section id="tech" className="mt-10 ">
        <div className="md:items-center md:justify-center flex flex-col">
          <h1 className="text-4xl text-white bebas ml-4 lg:text-5xl mb-5">LANGUAGES AND FRAMEWORKS</h1>
          <div className="flex flex-row gap-6 p-4 m-auto justify-center mb-4">
            <JavaScript color="white" />
            <HTML color="white" />
            <CSS color="white" />
            <Python color="white" />
          </div>
          <div className="flex flex-row gap-6 p-4 m-auto justify-center mb-10">
            <ReactJS color="white" />
            <Django color="white" />
            <Tailwind color="white" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
