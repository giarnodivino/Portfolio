import { useState } from 'react'
import mypic from './assets/images/1x1.png'
import pic2 from './assets/images/pic2.jpeg'
import {JavaScript, Python, HTML, CSS} from './assets/svg-icons.jsx';
import {Django, ReactJS, Tailwind, Bulma} from './assets/svg-icons.jsx';

function App() {
  const languages = ['JavaScript', 'Python'];
  const frameworks = ['ReactJS', 'Django', 'Tailwind', 'Bulma'];

  return (

    <div className="grid sm:grid-cols-1 sm:row-auto lg:grid-cols-10 lg:grid-rows-20 gap-2 sm:gap-2 lg:gap-4 justify-center justify-items-center pt-8 sm:pt-12 lg:pt-20 px-4 sm:px-0">

      <div className="block col-span-1 sm:col-span-2 lg:col-span-4 lg:row-start-3 lg:col-start-1 lg:row-span-3 w-full sm:w-auto">
        <img src={mypic} alt="Giarno Divino" className="rounded-full w-32 h-32 sm:w-40 sm:h-40 lg:w-60 lg:h-60 mx-auto border-4 border-white/10 shadow-lg"/>
      </div>
      
      <div className="block col-span-1 sm:col-span-2 lg:col-span-4 lg:row-start-3 lg:row-span-3 w-full sm:w-auto">
        <h2 className="text-xs sm:text-lg lg:text-body text-white">Hi! I'm</h2>
        <h1 className="text-4xl sm:text-xl lg:text-4xl mt-2 sm:mt-4 lg:mt-6 font-bold text-white mb-2 sm:mb-4 lg:mb-6 text-heading">Giarno Divino</h1>
        <h2 className="text-white text-xs sm:text-lg lg:text-body">a 3rd year Management Information Systems student passionate about web development
            and building real-world projects. I enjoy turning ideas into websites and applications, learning new 
            technologies, and continuously improving my skills. </h2>
      </div>


      <div className="cardcol1 size-full block p-3 sm:p-4 lg:p-6 border border-default rounded-base shadow-xs col-span-1 sm:col-span-2 lg:col-span-4 lg:row-span-3 lg:col-start-2 lg:row-start-7">
          <h5 className="text-sm sm:text-lg lg:text-4xl font-bold tracking-tight text-heading leading-8 text-white mb-3 sm:mb-4 lg:mb-6">About Me</h5>
          <p className="text-xs sm:text-xl lg:text-body mb-3 lg:mb-6 text-white pt-2 sm:pt-3 lg:pt-4">Hi there! I'm Giarno, a 3rd year Management Information Systems student with 
            a passion for web development and building things.
          </p>
          <p className="text-xs sm:text-xl lg:text-body mb-3 lg:mb-6 text-white">
            Throughout my studies and personal projects, I've enjoyed applying what I've learned to create practical 
            projects — from developing websites using Django and React to helping my family business build an online presence. 
            I'm always eager to learn new technologies, improve my coding skills, and take on problems that push me to grow.
          </p>
      </div>

      <div className="cardcol1 size-full block p-0 border-0 rounded-none overflow-hidden shadow-xs col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-3 lg:col-start-6 lg:row-start-7">
        <img src={pic2} alt="Giarno Divino" className="w-full h-full object-cover block" />
      </div>

      <div className="cardcol1 size-full block p-3 sm:p-4 lg:p-6 border border-default rounded-base shadow-xs col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:col-start-2 lg:row-start-10">
          <h5 className="text-sm sm:text-lg lg:text-3xl font-bold tracking-tight text-heading leading-8 text-white">Giarno Divino</h5>
          <p className="text-xs sm:text-sm lg:text-base mb-3 lg:mb-6 text-white">Web Developer</p>
      </div>

      <div className="cardcol3 size-full block p-3 sm:p-4 lg:p-6 border border-default rounded-base shadow-xs col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:row-start-10 lg:col-start-4 sm:row-span-2 md:row-span-2">
          <h5 className="text-sm sm:text-lg lg:text-3xl font-bold tracking-tight text-heading leading-8 text-white">Languages</h5>
          <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-10 justify-center pt-3 sm:pt-4 lg:pt-6">
            {/* {languages.map(item => <div className='p-2 bg-white/5 backdrop-blur-md rounded-xl grow text-center text-sm' key={item}> {item} </div>)} */}
            <JavaScript color="white"/>
            <HTML color="white"/>
            <CSS color="white"/>
            <Python color="white"/>
          </div>
      </div>
      <div className="cardcol3 size-full block p-3 sm:p-4 lg:p-6 border border-default rounded-base shadow-xs col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:row-start-10 lg:col-start-6 sm:row-span-2">
          <h5 className="text-sm sm:text-lg lg:text-3xl font-bold tracking-tight text-heading leading-8 text-white">Frameworks</h5>
          <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-10 justify-center pt-3 sm:pt-4 lg:pt-6">
            {/* {frameworks.map(item => <div className='p-2 bg-white/5 backdrop-blur-md rounded-xl grow text-center text-sm' key={item}> {item} </div>)} */}
            <Django color="white"/>
            <ReactJS color="white"/>
            <Tailwind color="white"/>
            <Bulma color="white"/>
          </div>
      </div>

      <div className="cardcol2 size-full block p-3 lg:p-6 border border-default rounded-base shadow-xs  sm:col-span-2 lg:col-start-8 lg:col-span-2 lg:row-span-5 lg:row-start-7 sm:row-start-13">
          <h2 className="text-sm sm:text-lg lg:text-3xl font-bold tracking-tight text-heading leading-8">Experience</h2>
          <div className="grid gap-3 lg:grid-rows-10 lg:grid-cols-2">

            <p className="font-bold text-gray-500 lg:col-span-2 lg:row-start-1 mt-5">Freelance Web Developer</p>
            <p className="text-body lg:col-span-1 lg:row-start-2 ">April 2025 - Present</p>
            <p className="font-bold lg:col-span-1 lg:row-start-2 "> J&F Divino Corporation</p>
            <ul className="list-disc list-inside text-body col-span-2 lg:row-span-3 lg:row-start-3  pl-2">
              <li>Developed the company website using Django, improving user experience and site performance.</li>
              <li>Collaborated closely with stakeholders to gather requirements and implement new features.</li>
            </ul>
            <p className="font-bold text-gray-500 lg:col-span-2 lg:row-start-6 mt-5 ">Product Development Officer</p>
            <p className="text-body lg:col-span-1 lg:row-start-7 ">June 2023 - March 2025</p>
            <p className="font-bold lg:col-span-1 lg:row-start-7 "> Google Developer Student Clubs</p>
            <ul className="list-disc list-inside text-body col-span-2 lg:row-span-3 lg:row-start-8 mt-5 pl-2">
              <li>Responsible for providing input and feedback to improve projects as well as contribute to
                  brainstorming, designing, and testing in the implementation of projects</li>
            </ul>
          </div>
      </div>

      <div className="sm:row-start-13 sm:col-start-2">
        <h1 className="font-bold text-white text-5xl ">Projects</h1>
      </div>



    </div>

  )
}

export default App
