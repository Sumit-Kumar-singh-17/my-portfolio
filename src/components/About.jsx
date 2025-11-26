import React, { useState, useRef, useEffect } from 'react'
import Myphoto from "../assets/myphoto.jpg"

const About = () => {

  const headingRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);

          // Animation ko reset karne ke liye 1 second baad false
          setTimeout(() => {
            setAnimate(false);
          }, 1000); // animation duration se match karo
        }
      },
      { threshold: 0.3 }
    );

    if (headingRef.current) observer.observe(headingRef.current);

    return () => observer.disconnect();
  }, []);
  return (

    <section
      id='about-us'
      className={`py-6 px-3 sm:py-10 sm:px-6 md:py-12 md:px-8 xl:py-16 xl:px-[9%] 2xl:py-20 2xl:px-[10%] relative overflow-hidden min-h-[70vh] ${animate ? "animate-[topScroll_0.8s_ease-out_forwards]" : ""}`}
    >
      <div className="text-center mb-6 sm:mb-10 md:mb-12 xl:mb-16 2xl:mb-20 animate-[topScroll_1s_ease-out_forwards] transition-all duration-500">
        <h2 ref={headingRef} className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-(--text-primary) mb-6 ">
          <span className="text-(--text-primary)">My</span>
          <span className="bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) bg-clip-text text-transparent"> AboutUs Section</span>
        </h2>

        <p className="text-sm sm:text-lg md:text-xl xl:text-2xl text-(--text-secondary) max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
          Hi, I’m Sumit – Turning Ideas Into Functional Web Solutions Building Modern, Responsive, and User-Friendly Web Applications.
        </p>

        <div className="mt-4 sm:mt-5 md:mt-6 xl:mt-8 mx-auto w-16 sm:w-20 md:w-24 xl:w-28 2xl:w-32 h-0.5 sm:h-1 bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) rounded-full"></div>
      </div>


      <div className="swiper-slide swiper-slide-active" data-swiper-slide-index="0">
        {/* style="width: 900px; */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group">

          {/* Left Part */}
          <div className="flex justify-center">
            {/* style="opacity: 1; transform: none */}
            <div className="relative p-8">
              <div className="relative" >
                {/* style="opacity: 1; transform: none;" */}
                <div className="w-80 h-80 rounded-full border-4 border-transparent dark:border-(--brand-primary)/20 shadow-2xl relative group-hover:border-(--brand-primary) group-hover:shadow-[0_0_32px_0_var(--brand-primary)]">
                  {/* style="transition: 0.3s; */}
                  <div className="w-full h-full rounded-full overflow-hidden bg-transparent">
                    <img alt="Sumit Kumar" className="w-full h-full object-cover object-top rounded-full" src={Myphoto}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Part */}
          <div className="text-center lg:text-left space-y-6">
            {/* style="opacity: 1; transform: none; */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-(--text-primary) transition-colors duration-300">Sumit Kumar</h3>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <span className="text-(--brand-primary) bg-(--brand-primary)/10 dark:bg-(--brand-primary)/20 px-3 py-1 rounded-full text-sm font-medium mt-1.5">React Developer</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <span className="px-3 py-1 bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) text-white text-xs rounded-full font-medium">BCA Graduate</span>
              <span className="px-3 py-1 bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) text-white text-xs rounded-full font-medium" >BRABU University</span>
              {/* <span class="px-3 py-1 bg-linear-to-r from-(--brand-primary)] to-(--brand-secondary) text-white text-xs rounded-full font-medium">Industry Expert</span> */}
            </div>
            <p className="text-(--text-secondary) leading-relaxed transition-colors duration-300">
              Dedicated educator, problem-solver, and visionary mentor empowering students to master computer science with clarity, confidence, and real-world depth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <div tabIndex="0"><button type="button" className="inline-block px-8 py-3 bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) cursor-pointer text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl no-underline hover:scale-[1.1]">Start Learning</button></div>
              <div tabIndex="0">
                <button type="button" className="inline-block px-8 py-3 bg-transparent text-(--brand-primary) border-2 border-(--border-glass) cursor-pointer hover:border-(--brand-primary) hover:bg-(--brand-primary)/10 dark:hover:bg-(--brand-primary)/20 rounded-lg font-semibold transition-all duration-300 no-underline hover:scale-[1.1]">Know More</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>



  )
}

export default About
