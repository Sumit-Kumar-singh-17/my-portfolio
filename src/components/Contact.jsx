import React,{useState, useEffect,useRef} from 'react'
import FormImg from "../assets/contactmewebp.jpg"

const Contact = () => {

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
            id='contact'
            className={`py-6 px-3 sm:py-10 sm:px-6 md:py-12 md:px-8 xl:py-16 xl:px-[9%] 2xl:py-20 2xl:px-[10%] relative overflow-hidden min-h-[70vh] ${animate ? "animate-[topScroll_0.8s_ease-out_forwards]" : ""}`}
        >
            {/* <div className="text-center mb-6 sm:mb-10 md:mb-12 xl:mb-16 2xl:mb-20 animate-[topScroll_1s_ease-out_forwards] transition-all duration-500">
                <h2 ref={headingRef} className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-(--text-primary) mb-6 ">
                    <span className="text-(--text-primary)">My</span>
                    <span className="bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) bg-clip-text text-transparent"> Contact Section</span>
                </h2>

                <p className="text-sm sm:text-lg md:text-xl xl:text-2xl text-(--text-secondary) max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
                    Hi, I’m Sumit – Turning Ideas Into Functional Web Solutions Building Modern, Responsive, and User-Friendly Web Applications.
                </p>

                <div className="mt-4 sm:mt-5 md:mt-6 xl:mt-8 mx-auto w-16 sm:w-20 md:w-24 xl:w-28 2xl:w-32 h-0.5 sm:h-1 bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) rounded-full"></div>
            </div> */}

            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-(--text-primary) leading-tight transition-colors duration-300" >
                                Get In
                                <span className="bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) bg-clip-text text-transparent">Touch</span>
                            </h2>
                            <p className="text-lg text-(--text-secondary) max-w-lg transition-colors duration-300">
                                Have questions about our courses? Want to discuss your learning journey? We're here to help you succeed.
                            </p>
                        </div>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="opacity: 1; transform: none;">
                                    <label for="user_name" className="block text-sm font-semibold text-(--text-primary) mb-2 transition-colors duration-300">
                                        Full Name
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user w-5 h-5 text-(--text-secondary) group-focus-within:text-custom-orange transition-colors duration-300" aria-hidden="true">
                                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                    <input placeholder="Enter your full name" className="w-full bg-(--surface-glass) backdrop-blur-xl border border-(--border-glass) rounded-lg pl-12 pr-4 py-3 text-(--text-primary) placeholder-(--text-secondary) focus:outline-none focus:border-custom-orange dark:focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300" id="user_name" type="text" name="user_name"></input>
                                    <div className="absolute inset-0 rounded-lg bg-linear-to-r from-custom-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" ></div>
                                    </div>
                                </div>
                                <div className="opacity: 1; transform: none;">
                                    <label for="user_email" className="block text-sm font-semibold text-(--text-primary) mb-2 transition-colors duration-300">
                                        Email Address
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-5 h-5 text-(--text-secondary) group-focus-within:text-custom-orange transition-colors duration-300" aria-hidden="true">
                                                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                            </svg>
                                        </div>
                                        <input placeholder="Enter your email" className="w-full bg-(--surface-glass) backdrop-blur-xl border border-(--border-glass) rounded-lg pl-12 pr-4 py-3 text-(--text-primary) placeholder-(--text-secondary) focus:outline-none focus:border-custom-orange dark:focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300" id="user_email" type="email" name="user_email"></input>
                                        <div className="absolute inset-0 rounded-lg bg-linear-to-r from-custom-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="opacity: 1; transform: none;">
                                    <label for="phone_number" className="block text-sm font-semibold text-(--text-primary) mb-2 transition-colors duration-300">
                                        Phone Number
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-5 h-5 text-(--text-secondary) group-focus-within:text-custom-orange transition-colors duration-300" aria-hidden="true">
                                                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                                            </svg>
                                        </div>
                                        <input placeholder="Enter your phone number" className="w-full bg-(--surface-glass) backdrop-blur-xl border border-(--border-glass)]\ rounded-lg pl-12 pr-4 py-3 text-\(--text-primary)]\ placeholder-(--text-secondary) focus:outline-none focus:border-custom-orange dark:focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300" id="phone_number" type="tel" name="phone_number"></input>
                                        <div className="absolute inset-0 rounded-lg bg-linear-to-r from-custom-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" ></div>
                                    </div>
                                </div>
                                <div className="opacity: 1; transform: none;">
                                    <label for="subject" className="block text-sm font-semibold text-(--text-primary) mb-2 transition-colors duration-300">
                                        Subject
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10"></div>
                                        <input placeholder="What's this about?" className="w-full bg-(--surface-glass) backdrop-blur-xl border border-(--border-glass) rounded-lg pl-4 pr-4 py-3 text-(--text-primary) placeholder-(--text-secondary) focus:outline-none focus:border-custom-orange dark:focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300" id="subject" type="text" name="subject"></input>
                                        <div className="absolute inset-0 rounded-lg bg-linear-to-r from-custom-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" ></div>
                                    </div>
                                </div>
                            </div>
                            <div className='opacity-100'>
                                <label for="message" className="block text-sm font-semibold text-(--text-primary) mb-2 transition-colors duration-300">
                                    Message 
                                </label>
                                <div className="relative group">
                                    <div className="absolute left-3 top-3 z-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square w-5 h-5 text-[var(--text-secondary)] group-focus-within:text-custom-orange transition-colors duration-300" aria-hidden="true">
                                            <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                    </div>
                                    <textarea placeholder="Tell us more about your inquiry..." rows="5" className="w-full bg-(--surface-glass) backdrop-blur-xl border border-(--border-glass) rounded-lg pl-12 pr-4 py-3 text-(--text-primary) placeholder-(--text-secondary) focus:outline-none focus:border-custom-orange dark:focus:border-orange-400 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 resize-none" id="message" name="message"></textarea>
                                    <div className="absolute inset-0 rounded-lg bg-linear-to-r from-custom-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </div>
                            </div>
                            <div className="opacity: 1; transform: none;">
                                <button type="submit" className="group relative w-full sm:w-auto px-8 py-4 bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer overflow-hidden shadow-lg hover:shadow-xl" tabIndex="0">
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        Send Message
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send w-5 h-5" aria-hidden="true">
                                            <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                                            <path d="m21.854 2.147-10.94 10.939"></path>
                                        </svg>
                                    </span>
                                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                    {/* style="transform: translateX(-100%); */}
                                </button>
                            </div>

                        </form>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative max-w-md w-ful transform-nonel">
                            <img className="relative z-10 w-full rounded-2xl shadow-2xl transform hover:rotate-1 transition-transform duration-300 border border-(--border-glass)" alt="Contact us - Get in touch with our team" loading="lazy" src={FormImg}></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
