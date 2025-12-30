import mypic from './assets/images/1x1.png'
import pic2 from './assets/images/pic2.jpeg'
import { JavaScript, Python, HTML, CSS } from './assets/svg-icons.jsx'
import { Django, ReactJS, Tailwind, Bulma } from './assets/svg-icons.jsx'
import { LinkedIn, Github, Mail } from './assets/svg-icons.jsx'

function App() {
  return (
    <div
      className="
        flex flex-col gap-6 px-4 pt-8
        lg:grid lg:grid-cols-10 lg:grid-rows-7 lg:gap-4 lg:pt-20 lg:px-0
        justify-center justify-items-center
      "
    >

      {/* HERO */}
      <div className="lg:col-span-4 lg:row-start-2 lg:col-start-1 lg:row-span-1 w-full">
        <img
          src={mypic}
          alt="Giarno Divino"
          className="rounded-full w-32 h-32 sm:w-40 sm:h-40 lg:w-60 lg:h-60 mx-auto border-4 border-white/10 shadow-lg"
        />
      </div>

      <div className="lg:col-span-4 lg:row-start-2 lg:row-span-1 w-full text-center lg:text-left">
        <h2 className="text-xs sm:text-lg lg:text-body text-white">
          Hi! I'm
        </h2>
        <h1 className="text-4xl sm:text-xl lg:text-4xl mt-2 sm:mt-4 lg:mt-6 font-bold text-white mb-2 sm:mb-4 lg:mb-6 text-heading">
          Giarno Divino
        </h1>
        <h2 className="text-white text-xs sm:text-lg lg:text-lg">
          a 3rd year Management Information Systems student passionate about web
          development and building real-world projects. I enjoy turning ideas
          into websites and applications, learning new technologies, and
          continuously improving my skills.
        </h2>
      </div>

      <div className='lg:col-span-1 lg:row-start-3 lg:col-start-3 w-full'>
        
      </div>

      {/* ABOUT */}
      <div className="cardcol1 p-3 sm:p-4 lg:p-6 border border-default rounded-base shadow-xs w-full lg:col-span-4 lg:row-start-4 lg:col-start-2 lg:row-span-2">
        <h5 className="text-sm sm:text-lg lg:text-4xl font-bold tracking-tight text-heading leading-8 text-white mb-3 sm:mb-4 lg:mb-6">
          About Me
        </h5>
        <p className="text-xs sm:text-xl lg:text-body mb-3 lg:mb-6 text-white">
          Hi there! I'm Giarno, a 3rd year Management Information Systems student
          with a passion for web development and building things.
        </p>
        <p className="text-xs sm:text-xl lg:text-body mb-3 lg:mb-6 text-white">
          Throughout my studies and personal projects, I've enjoyed applying
          what I've learned to create practical projects — from developing
          websites using Django and React to helping my family business build an
          online presence.
        </p>
      </div>

      {/* IMAGE CARD */}
      <div className="cardcol1 overflow-hidden w-full lg:col-span-2 lg:row-start-4 lg:col-start-6 lg:row-span-2 ">
        <img src={pic2} alt="" className="w-full h-full object-cover" />
      </div>

      {/* NAME CARD */}
      <div className="cardcol1 p-3 sm:p-4 lg:p-6 border border-default rounded-base shadow-xs w-full lg:col-span-2 lg:row-start-6 lg:col-start-2">
        <h5 className="text-sm sm:text-lg lg:text-3xl font-bold tracking-tight text-heading leading-8 text-white">Giarno Divino</h5>
        <p className="text-xs sm:text-sm lg:text-base text-white">Contact Me</p>
        <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-3 sm:pt-4 lg:pt-10 justify-center">
          <LinkedIn color="white" link="https://www.linkedin.com/in/giarnodivino/" />
          <Github color="white" link="https://github.com/giarnodivino" />
          <Mail color="white" link="mailto:divinogiarno7@gmail.com" />
        </div>
      </div>

      {/* LANGUAGES */}
      <div className="cardcol3 p-3 sm:p-4 lg:p-6 border border-default rounded-base shadow-xs w-full lg:col-span-2 lg:row-start-6 lg:col-start-4">
        <h5 className="text-sm sm:text-lg lg:text-3xl font-bold tracking-tight text-heading leading-8 text-white">
          Languages
        </h5>
        <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-10 justify-center pt-3 sm:pt-4 lg:pt-6">
          <JavaScript color="white" />
          <HTML color="white" />
          <CSS color="white" />
          <Python color="white" />
        </div>
      </div>

      {/* FRAMEWORKS */}
      <div className="cardcol3 p-3 sm:p-4 lg:p-6 border border-default rounded-base shadow-xs w-full lg:col-span-2 lg:row-start-6 lg:col-start-6">
        <h5 className="text-sm sm:text-lg lg:text-3xl font-bold tracking-tight text-heading leading-8 text-white">
          Frameworks
        </h5>
        <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-10 justify-center pt-3 sm:pt-4 lg:pt-6">
          <Django color="white" />
          <ReactJS color="white" />
          <Tailwind color="white" />
          <Bulma color="white" />
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="cardcol2 p-3 lg:p-6 border border-default rounded-base shadow-xs w-full lg:col-span-2 lg:row-start-4 lg:col-start-8 lg:row-span-3">
        <h2 className="text-sm sm:text-lg lg:text-3xl font-bold tracking-tight text-heading leading-8 mb-4">
          Experience
        </h2>

        <div className="space-y-20 ">
          <div>
            <p className="font-bold text-gray-500 mt-15">Freelance Web Developer</p>
            <p className="text-body">April 2025 – Present</p>
            <p className="font-bold">J&F Divino Corporation</p>
            <ul className="list-disc list-inside text-body pl-2 mt-2">
              <li>Developed the company website using Django.</li>
              <li>Collaborated with stakeholders on new features.</li>
            </ul>
          </div>

          <div className="mb-15">
            <p className="font-bold text-gray-500">Product Development Officer</p>
            <p className="text-body">August 2024 – May 2025</p>
            <p className="font-bold">Google Developer Student Clubs</p>
            <ul className="list-disc list-inside text-body pl-2 mt-2">
              <li>
                Contributed to brainstorming, design, testing, and feedback for
                projects.
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
