

// import React, { useState, useEffect } from "react";
// import { IoMenuSharp } from "react-icons/io5";

// const NavBar = () => {
//     const [active, setActive] = useState("home");
//     const [open, setOpen] = useState(false)

//     // ScrollSpy Logic
//     useEffect(() => {
//         const sections = document.querySelectorAll("section");

//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         setActive(entry.target.id);
//                     }
//                 });
//             },
//             { threshold: 0.5 }
//         );

//         sections.forEach((sec) => observer.observe(sec));

//         return () => {
//             sections.forEach((sec) => observer.unobserve(sec));
//         };
//     }, []);

//     return (
//         <>
//             <header className="hidden lg:block fixed top-0 left-0 w-full z-50 px-4 pt-6">
//                 <div className="relative mx-auto max-w-6xl rounded-full transition-all duration-700 ease-out lg:bg-transparent backdrop-blur-md border border-transparent bg-black">
//                     <div className="flex h-16 items-center px-6 transition-all duration-500 ease-out justify-between animate-[slideLeftNav_1s_ease-out_forwards] ">

//                         {/* LEFT LOGO */}
//                         <div className="flex items-center">
//                             <span className="text-white text-2xl font-bold">Port<span className="text-(--brand-primary)">folio</span></span>
//                         </div>

//                         {/* CENTER NAV MENU */}
//                         <nav className="hidden lg:flex items-center transition-all duration-500 ease-out scale-100">
//                             <div className="flex items-center bg-black/30 backdrop-blur-xl rounded-full p-1.5 border border-neutral-700 shadow-lg shadow-black/20">

//                                 {["home", "project", "about-us", "skills", "blog"].map((item) => (
//                                     <a
//                                         key={item}
//                                         href={`#${item}`}
//                                         className={`relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 group rounded-full cursor-pointer text-(--text-secondary) hover:text-(--text-primary)
//                     ${active === item ? "text-white bg-(--brand-primary)" : "text-(--text-secondary) hover:text-white hover:bg-transparent hover:scale-105 hover:shadow-none"} 
//                   `}
//                                     >
//                                         <span className="relative z-10 capitalize">{item}</span>
//                                     </a>
//                                 ))}
                                
//                             </div>
//                         </nav>

//                         {/* RIGHT SIDE - CONTACT BUTTON */}
//                         <div className="hidden lg:flex items-center gap-3 transition-all duration-500 ease-out opacity-100 translate-x-0 scale-100">
//                             <a className="no-underline" href="/login">
//                                 <button className="group relative px-6 py-2.5 bg-(--brand-primary) backdrop-blur-xl rounded-full border cursor-pointer border-(--border-glass) text-white transition-all duration-300 overflow-hidden hover:scale-105 shadow-md hover:shadow-lg">

//                                     <div className="flex items-center gap-2 relative z-10">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
//                                             stroke="currentColor" strokeWidth="2" className="h-4 w-4">
//                                             <path d="m10 17 5-5-5-5"></path>
//                                             <path d="M15 12H3"></path>
//                                             <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
//                                         </svg>
//                                         <span className="font-semibold">Contact</span>
//                                     </div>

//                                     <div className="absolute inset-0 bg-linear-to-r from-[--brand-primary] to-[--brand-secondary] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
//                                 </button>
//                             </a>
//                         </div>

//                     </div>

//                 </div>
//             </header >

//             <header className="lg:hidden fixed top-0 left-0 w-full z-100 px-4 pt-4">
//                 <div className="mx-auto max-w-6xl">
//                     <div className="flex h-16 items-center justify-between px-6 bg-black/80 backdrop-blur-xl rounded-full border border-white/10 shadow-lg">
//                         <button className="shrink-0 group relative cursor-pointer">
//                             <div className="relative overflow-hidden rounded-xl p-2">
//                                 <span className="text-white text-2xl font-bold">Port<span className="text-(--brand-primary)">folio</span></span>
//                             </div>
//                         </button>
//                         <div className="flex items-center gap-3">
//                             <button className="lg:hidden p-2.5 bg-white/10 backdrop-blur-xl rounded-full border cursor-pointer border-white/20 hover:border-blue-400/50 transition-all duration-300 shadow-md hover:scale-105" ariaLabel="Toggle menu" onClick={() => setOpen(!open)}>
//                                 <div className="relative w-5 h-5">
//                                     <div className={`absolute inset-0 transform transition-all duration-500 ease-in-out ${open ? "opacity-0 rotate-90 " : "opacity-100 rotate-0 "}`}>
//                                         {/* style="transform: none; opacity: 1; */}
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu w-5 h-5 text-white" aria-hidden="true">
//                                             <path d="M4 5h16"></path>
//                                             <path d="M4 12h16"></path>
//                                             <path d="M4 19h16"></path>
//                                         </svg>
//                                     </div>
//                                     <div className={`absolute inset-0 transform transition-all duration-500 ease-in-out ${open ? "opacity-100 rotate-0 " : "opacity-0 -rotate-90"}`}>
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x w-5 h-5 text-white" aria-hidden="true">
//                                             <path d="M18 6 6 18"></path>
//                                             <path d="m6 6 12 12"></path>
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {open && (
//                     <div class="fixed top-20 right-0 h-screen  w-full bg-black/95 backdrop-blur-2xl z-20">
//                         <div className="p-6">
//                             <div class="space-y-3 mb-6">
//                                 <a href="home" class="block cursor-pointer w-full text-left p-4 hover:bg-white/10 transition-all duration-300  text-white font-medium">Home</a>
//                                 <a href="projects" class="block cursor-pointer w-full text-left p-4 hover:bg-white/10 transition-all duration-300  text-white font-medium">Projects</a>
//                                 <a href="about" class="block cursor-pointer w-full text-left p-4 hover:bg-white/10 transition-all duration-300  text-white font-medium">About Us</a>
//                                 <a href="skills" class="block cursor-pointer w-full text-left p-4 hover:bg-white/10 transition-all duration-300  text-white font-medium">Skills</a>
//                                 <a href="blog" class="block cursor-pointer w-full text-left p-4 hover:bg-white/10 transition-all duration-300  text-white font-medium">Blog</a>
//                             </div>
//                         </div>
//                     </div>
//                 )

//                 }


//             </header>
//         </>
//     );
// };

// export default NavBar;




import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  // ScrollSpy Logic
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // 30% visible ho to active class
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  return (
    <>
      <header className="hidden lg:block fixed top-0 left-0 w-full z-50 px-4 pt-6">
        <div className="relative mx-auto max-w-6xl rounded-full transition-all duration-700 ease-out lg:bg-transparent backdrop-blur-md border border-transparent bg-black">
          <div className="flex h-16 items-center px-6 transition-all duration-500 animate-[slideLeftNav_1s_ease-out_forwards] ease-out justify-between">

            {/* LEFT LOGO */}
            <div className="flex items-center">
              <span className="text-white text-2xl font-bold">
                Port<span className="text-(--brand-primary)">folio</span>
              </span>
            </div>

            {/* CENTER NAV MENU */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center bg-black/30 backdrop-blur-xl rounded-full p-1.5 border border-neutral-700 shadow-lg shadow-black/20">
                {["home", "project", "about-us", "skills", "contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className={`relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 group rounded-full cursor-pointer text-(--text-secondary)
                      ${active === item ? "text-white bg-(--brand-primary)" : "hover:text-white hover:bg-transparent hover:scale-105"}
                    `}
                  >
                    <span className="relative z-10 capitalize">{item}</span>
                  </a>
                ))}
              </div>
            </nav>

            {/* RIGHT SIDE - CONTACT BUTTON */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="/login" className="no-underline">
                <button className="group relative px-6 py-2.5 bg-(--brand-primary) backdrop-blur-xl rounded-full border border-(--border-glass) text-white transition-all duration-300 overflow-hidden hover:scale-105 shadow-md hover:shadow-lg">
                  <div className="flex items-center gap-2 relative z-10">
                    <span className="font-semibold">Contact</span>
                  </div>
                  <div className="absolute inset-0 bg-linear-to-r from-[--brand-primary] to-[--brand-secondary] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </button>
              </a>
            </div>

          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
