import React, { useRef, useState, useEffect } from 'react'
import TypeWriterTitle from './TypeWriterTitle';
import LiveCoding from './LiveCoding'



const Home = () => {

    const cardRef = useRef(null);
    const [active, setActive] = useState(false);
    const text = "Developer".split("");


    useEffect(() => {
        const handleScroll = () => {
            const card = cardRef.current?.getBoundingClientRect();
            if (!card) return;

            // Jaise hi div screen ke top ko touch kare, effect ON
            if (card.top <= 0) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <section id="home" className='relative mt-15 xl:mt-10 min-h-screen flex items-center justify-center overflow-hidden bg-(--surface-bg) transition-colors duration-300'
        // style={{backgroundColor:'var(--surface-bg)' }}
        >

            <div className="absolute inset-0 -z-10">
                <div className="w-full h-full bg-linear-to-br from-(--brand-primary)/10 via-(--brand-secondary)/10 to-transparent animate-gradient-move"></div>
                <svg className="absolute top-0 right-0 w-96 h-96 opacity-30 pointer-events-none" viewBox="0 0 400 400" fill="none">
                    <circle cx="200" cy="200" r="180" fill="url(#paint0_radial)"></circle>
                    <defs>
                        <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(200 200) scale(180)" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#ff9800" stopOpacity="0.3"></stop>
                            <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                        </radialGradient>
                    </defs>
                </svg>
            </div>

            <div className="mt-15 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center w-full px-4">
                <div className="relative z-10 animate-[slideLeft_1s_ease-out_forwards]">
                    <div className="space-y-8 opacity-100 transform-none">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-(--text-primary) transition-colors duration-300 drop-shadow-xl">
                            Hey, I'm Sumit, a React
                            <br className="hidden md:block"></br>
                            <span className="bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) bg-clip-text text-transparent inline-block">
                                <TypeWriterTitle />
                            </span>


                        </h1>

                        <p className="text-xl md:text-2xl text-(--text-secondary) max-w-2xl font-medium transition-colors duration-300">
                            I’m a React Developer who loves building fast, modern, and responsive web applications. I turn ideas into smooth, interactive user experiences using React and clean UI design.
                        </p>
                        <div className="flex gap-4 opacity-100 transform-none" >
                            <button type="button" className="w-12 h-12 bg-(--surface-glass) backdrop-blur-xl border border-(--border-glass) rounded-full flex items-center justify-center text-(--text-secondary) hover:bg-blue-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer relative z-10 transform-none" title="LinkedIn" tabIndex="0">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                                </svg>
                            </button>
                            {/* <button type="button" className="w-12 h-12 bg-(--surface-glass) backdrop-blur-xl border border-(--border-glass) rounded-full flex items-center justify-center text-(--text-secondary) hover:bg-red-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer relative z-10 transform-none" title="YouTube" tabIndex="0">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                                </svg>
                            </button> */}

                            <button
                                type="button"
                                className="w-12 h-12 bg-(--surface-glass) backdrop-blur-xl border border-(--border-glass) rounded-full flex items-center justify-center text-(--text-secondary) hover:bg-black hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer relative z-10 transform-none"
                                title="GitHub"
                                tabIndex="0"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    className="text-2xl"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
    3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
    0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.729.084-.729 
    1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.303 
    3.492.997.107-.776.418-1.303.762-1.603-2.665-.3-5.466-1.334-5.466-5.93 
    0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
    0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 
    3-.405 1.02.006 2.04.138 
    3 .405 2.28-1.552 3.285-1.23 
    3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 
    1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 
    5.92.435.372.81 1.102.81 2.222 
    0 1.606-.015 2.896-.015 3.286 
    0 .315.21.69.825.57C20.565 22.092 24 17.592 
    24 12.297c0-6.627-5.373-12-12-12"/>
                                </svg>
                            </button>

                            <button type="button" className="w-12 h-12 bg-(--surface-glass) backdrop-blur-xl border border-(--border-glass) rounded-full flex items-center justify-center text-(--text-secondary) hover:bg-pink-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer relative z-10 transform-none" title="Instagram" tabIndex="0">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 opacity-100 transform-none">
                            <button type="button" className="inline-block px-6 py-4 bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300  cursor-pointer relative z-10 items-center gap-2 hover:scale-[1.1]">Download CV</button>
                            <button type="button" className="inline-flex items-center gap-2 px-6 py-3 bg-(--surface-glass) backdrop-blur-xl text-(--text-primary) border border-(--border-glass) font-semibold rounded-xlhover:border-(--brand-primary) hover:bg-(--brand-primary)/10 dark:hover:bg-(--brand-primary)/20 rounded-lg transition-all duration-300 cursor-pointer relative z-10 justify-center w-full sm:w-auto hover:scale-[1.1]" tabIndex="0">

                                Contact Me
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative z-10 opacity-100 transform-none animate-[slideRight_1s_ease-out_forwards]">
                    <div className=''>
                        <div className="flex items-center justify-center relative p-2 md:p-10">
                            <div className="w-full relative perspective-[1000px]">
                                <div ref={cardRef} className={`relative max-w-6xl -mt-12 mx-auto h-144 w-full border-4 border-[#6C6C6C] p-2.5 bg-linear-to-br from-[#2a2a2a] via-[#222222] to-[#1a1a1a] rounded-[30px] shadow-2xl transform transition-transform duration-500 ease-out  ${active ? "scale-[0.8] rotate-x-20" : "scale-100 rotate-x-0"}`}>
                                    <div className="absolute -inset-6 rounded-[40px] bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 opacity-40 blur-3xl animate-pulse pointer-events-none"></div>
                                    <div className="absolute inset-0 pointer-events-none z-30 rounded-[30px] bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) opacity-10 blur-[20px]"></div>
                                    <div className="h-full w-full bg-black overflow-hidden rounded-[20px] relative z-40">
                                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rounded-full z-50"></div>
                                        <div className="absolute top-0 left-0 flex items-center gap-2 w-full h-12 px-6 bg-black/90 border-b border-gray-800/50 rounded-t-[20px] z-50 backdrop-blur-sm opacity-100">
                                            <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer hover:bg-red-400 transition-colors" tabIndex="0"></div>
                                            <div className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer hover:bg-yellow-400 transition-colors" tabIndex="0"></div>
                                            <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer hover:bg-green-400 transition-colors" tabIndex="0"></div>
                                            <div className="text-gray-200 ml-4 text-sm font-medium select-none">Sumit.html</div>
                                            <div className="ml-auto flex items-center gap-2">
                                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                                <span className="text-xs text-green-400">Live Coding</span>
                                            </div>
                                        </div>
                                        <div className="absolute inset-3 bg-black overflow-auto rounded-[15px] pt-12" style={{
                                            overflow: "auto",
                                            scrollbarWidth: "none" // Firefox ke liye
                                        }}>
                                            <div className="p-3 h-full">
                                                <LiveCoding />
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-transparent pointer-events-none rounded-[20px] z-10"></div>
                                    </div>
                                    <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent rounded-[30px] pointer-events-none z-20"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home




