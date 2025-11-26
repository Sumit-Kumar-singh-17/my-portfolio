import React,{useState, useEffect,useRef} from 'react'

const Skills = () => {

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
          id='skills'
          className={`py-6 px-3 sm:py-10 sm:px-6 md:py-12 md:px-8 xl:py-16 xl:px-[9%] 2xl:py-20 2xl:px-[10%] relative overflow-hidden min-h-[70vh] ${animate ? "animate-[topScroll_0.8s_ease-out_forwards]" : ""}`}
        >
          <div className="text-center mb-6 sm:mb-10 md:mb-12 xl:mb-16 2xl:mb-20 animate-[topScroll_1s_ease-out_forwards] transition-all duration-500">
            <h2 ref={headingRef} className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-(--text-primary) mb-6 ">
              <span className="text-(--text-primary)">My</span>
              <span className="bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) bg-clip-text text-transparent"> Slills Section</span>
            </h2>
    
            <p className="text-sm sm:text-lg md:text-xl xl:text-2xl text-(--text-secondary) max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
              Hi, I’m Sumit – Turning Ideas Into Functional Web Solutions Building Modern, Responsive, and User-Friendly Web Applications.
            </p>
    
            <div className="mt-4 sm:mt-5 md:mt-6 xl:mt-8 mx-auto w-16 sm:w-20 md:w-24 xl:w-28 2xl:w-32 h-0.5 sm:h-1 bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) rounded-full"></div>
          </div>

          
        </section>
  )
}

export default Skills
