

import React from 'react';
import Nago from '../assets/nago.jpg';
import Port from '../assets/port.jpg';
import Tic from '../assets/tictoe.jpg';
import Calcu from '../assets/calculator.jpg';

const Project = () => {

  const projects = [
    {
      img: Nago,
      link: "https://sumit-kumar-singh-17.github.io/ngo-website/",
      github: "https://github.com/sumit-kumar-singh-17/ngo-website",
      title: "NGO Website",
      shortDesc: "Responsive NGO website with volunteer and events sections.",
      notes: "This project is a website for an NGO, featuring sections for volunteers and events. Built using modern web development techniques with responsive design.",
      tech: ["React", "CSS", "HTML"]
    },
    {
      img: Tic,
      link: "https://sumit-kumar-singh-17.github.io/Tic-Tac-Toe/",
      github: "https://github.com/sumit-kumar-singh-17/Tic-Tac-Toe",
      title: "Tic-Tac-Toe Game",
      shortDesc: "Classic Tic-Tac-Toe game implemented in React.",
      notes: "A simple Tic-Tac-Toe game implemented in React. Demonstrates state management and game logic implementation.",
      tech: ["React", "CSS", "JavaScript"]
    },
    {
      img: Port,
      link: "https://sumit-kumar-singh-17.github.io/Portfolio/",
      github: "https://github.com/sumit-kumar-singh-17/Portfolio",
      title: "Portfolio Website",
      shortDesc: "Personal portfolio with flip cards and animations.",
      notes: "My personal portfolio website, featuring responsive design, animations, and a flip card project section.",
      tech: ["React", "Tailwind CSS"]
    },
    {
      img: Calcu,
      link: "https://sumit-kumar-singh-17.github.io/Calculator/",
      github: "https://github.com/sumit-kumar-singh-17/Calculator",
      title: "Calculator App",
      shortDesc: "Basic calculator supporting arithmetic operations.",
      notes: "A basic calculator application built in React, supporting simple arithmetic operations.",
      tech: ["React", "CSS", "JavaScript"]
    }
  ];

  return (
    <section
      id='project'
      className="py-6 px-3 sm:py-10 sm:px-6 md:py-12 md:px-8 xl:py-16 xl:px-[9%] 2xl:py-20 2xl:px-[10%] relative overflow-hidden min-h-[70vh]"
    >
      <div className="text-center mb-6 sm:mb-10 md:mb-12 xl:mb-16 2xl:mb-20">
        <h2 className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-(--text-primary) mb-6">
          <span className="text-(--text-primary)">My</span>
          <span className="bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) bg-clip-text text-transparent"> Projects Section</span>
        </h2>

        <p className="text-sm sm:text-lg md:text-xl xl:text-2xl text-(--text-secondary) max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
          Check out my work—projects crafted with passion, creativity, and modern web technologies.
        </p>

        <div className="mt-4 sm:mt-5 md:mt-6 xl:mt-8 mx-auto w-16 sm:w-20 md:w-24 xl:w-28 2xl:w-32 h-0.5 sm:h-1 bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) rounded-full"></div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-10 md:gap-x-10 md:gap-y-12 lg:gap-x-12 lg:gap-y-14 mb-12 max-w-7xl mx-auto px-0 sm:px-2 md:px-4 justify-items-center ">
        {projects.map((proj, i) => (
          <div key={i} className="w-full max-w-xs flex justify-center">
            <div
  onClick={() =>
    window.open(`https://sumit-kumar-singh-17.github.io/${proj.link}/`, "_blank")
  }
  className="block h-full w-full cursor-pointer"
>
  <div className="group relative h-110 w-full max-w-3xl perspective-[2000px]">

    {/* Outer Wrapper */}
    <div className="relative h-full w-full transition-all duration-700 transform-3d transform-[rotateY(0deg)] group-hover:transform-[rotateY(180deg)]">

      {/* Front */}
      <div className="inset-0 h-full w-full overflow-hidden rounded-2xl absolute bg-linear-to-br from-primary/10 via-transparent to-blue-500/10 border border-zinc-800/50 shadow-xl transition-all duration-700 group-hover:shadow-2xl group-hover:border-primary/30 backface-hidden">
        <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
          <img alt="Project" className="absolute inset-0 w-full h-full p-2 object-cover rounded-t-2xl" src={proj.img} />
        </div>

        <div className="text-(--text-secondary) pl-3">
          <h1 className="text-(--text-primary) font-bold text-2xl mb-3.5">{proj.title}</h1>

          <div className="flex flex-wrap gap-2 mt-2.5 mb-3.5">
            {proj.tech.map((t, index) => (
              <span key={index} className="uppercase font-bold px-2 py-1 bg-(--surface-glass) backdrop-blur-xl text-(--text-secondary) text-xs rounded-full border border-(--border-glass)">
                {t}
              </span>
            ))}
          </div>

          <p>{proj.notes}</p>
        </div>
      </div>

      {/* Back Side */}
      <div className="absolute inset-0 h-full w-full rounded-2xl p-5 border flex flex-col group-hover:shadow-2xl group-hover:border-primary/30 transform-[rotateY(180deg)] backface-hidden bg-linear-to-br from-primary/10 via-transparent to-blue-500/10 border-zinc-800/50 shadow-xl transition-all duration-700">

        <h2 className="text-xl font-semibold text-white">{proj.title}</h2>
        <p className="text-gray-300 mt-2">{proj.notes}</p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mt-2.5 mb-3.5">
          {proj.tech.map((t, index) => (
            <span key={index} className="bg-(--surface-glass) uppercase font-bold text-(--text-secondary) text-xs px-2 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-auto border-t pt-4 border-zinc-800 text-gray-400">
          <div className="flex gap-3 mt-4" onClick={(e) => e.stopPropagation()}>
            <a href={proj.link} target="_blank" className="px-3 py-1 bg-(--brand-secondary) text-white rounded hover:bg-(--brand-secondary)">
              Live Demo
            </a>
            <a href={proj.github} target="_blank" className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-800">
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-auto border-t pt-4 border-zinc-800 text-gray-400">
          Completed: Jan 2025
        </div>
      </div>

    </div>
  </div>
</div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;



// {/* <a href={`https://sumit-kumar-singh-17.github.io/${proj.link}/`} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
//               <div className="group relative h-110 w-full max-w-3xl perspective-[2000px]">
//                 {/* Outer Wrapper */}
//                 <div className="relative h-full w-full transition-all duration-700 transform-3d transform-[rotateY(0deg)] group-hover:transform-[rotateY(180deg)]">
//                   {/* Front */}
//                   <div className=" inset-0 h-full w-full overflow-hidden rounded-2xl from-primary/10 absolute  bg-linear-to-br via-transparent to-blue-500/10 border border-zinc-800/50 shadow-xl transition-all duration-700 group-hover:shadow-2xl group-hover:border-primary/30 backface-hidden ">
//                     <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
//                       <img alt="Project" className="absolute inset-0 w-full h-full p-2 object-cover rounded-t-2xl" src={proj.img} />
//                     </div>
//                     <div className='text-(--text-secondary) pl-3'>
//                       <h1 className='text-(--text-primary) font-bold text-2xl mb-3.5'>{proj.title}</h1>
//                       <div className="flex flex-wrap gap-2 mt-2.5 mb-3.5">
//                         {proj.tech.map((t, index) => (
//                           <span key={index} className=" uppercase font-bold px-2 py-1 bg-(--surface-glass) backdrop-blur-xl text-(--text-secondary) text-xs rounded-full border border-(--border-glass)">
//                             {t}
//                           </span>
//                         ))}
//                       </div>
//                       <p>{proj.notes}</p>
//                     </div>
//                   </div>

//                   {/* Back Side */}
//                   <div className="absolute inset-0 h-full w-full rounded-2xl p-5  border  flex flex-col  group-hover:shadow-2xl group-hover:border-primary/30 transform-[rotateY(180deg)] backface-hidden from-primary/10  bg-linear-to-br via-transparent to-blue-500/10  border-zinc-800/50 shadow-xl transition-all duration-700">
//                     <h2 className="text-xl font-semibold text-white">{proj.title}</h2>
//                     <p className="text-gray-300 mt-2">{proj.notes}</p>

//                     {/* Tech Badges on Back */}
//                     <div className="flex flex-wrap gap-2 mt-2.5 mb-3.5">
//                       {proj.tech.map((t, index) => (
//                         <span key={index} className="bg-(--surface-glass) uppercase font-bold text-(--text-secondary) text-xs px-2 py-1 rounded-full">
//                           {t}
//                         </span>
//                       ))}
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="mt-auto border-t pt-4 border-zinc-800 text-gray-400">
//                       <div className="flex gap-3 mt-4">
//                         <a href={proj.link} target="_blank" className="px-3 py-1 bg-(--brand-secondary) text-white rounded hover:bg-(--brand-secondary)">Live Demo</a>
//                         <a href={proj.github} target="_blank" className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-800">GitHub</a>
//                       </div>
//                     </div>
//                     <div className="mt-auto border-t pt-4 border-zinc-800 text-gray-400">Completed: Jan 2025</div>
//                   </div>

//                 </div>
//               </div>
//             </a> */}