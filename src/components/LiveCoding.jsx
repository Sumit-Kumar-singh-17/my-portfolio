// import { useState, useEffect } from "react";

// export default function LiveCoding() {
//   const codeText = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   <title>Sumit Kumar — Frontend Developer</title>
//   <meta name="description" content="Portfolio of Sumit Kumar — React developer, UI enthusiast." />
//   <link rel="stylesheet" href="styles.css" />
// </head>
// <body>
//   <header>
//     <nav>
//       <a href="#home">Home</a>
//       <a href="#projects">Projects</a>
//       <a href="#about">About</a>
//       <a href="#contact">Contact</a>
//     </nav>
//   </header>

//   <main>
//     <section id="home" class="hero">
//       <h1>Hey, I'm Sumit</h1>
//       <p>Frontend Developer • React • JavaScript • CSS</p>
//       <a href="#projects" class="btn">See my work</a>
//     </section>

//     <section id="projects" class="projects">
//       <h2>Selected Projects</h2>

//       <article class="project">
//         <h3>Movie Explorer</h3>
//         <p>A responsive React app that fetches movies from an API, with search, filters and trailers.</p>
//         <ul>
//           <li>React + Hooks</li>
//           <li>TMDB API integration</li>
//           <li>Responsive, accessible UI</li>
//         </ul>
//       </article>

//       <article class="project">
//         <h3>Weather Now</h3>
//         <p>Weather app with 5-day forecast, location detection and dynamic backgrounds.</p>
//         <ul>
//           <li>Tailwind CSS</li>
//           <li>OpenWeatherMap API</li>
//           <li>Animated background based on weather</li>
//         </ul>
//       </article>

//       <article class="project">
//         <h3>DSA Visualizer</h3>
//         <p>Interactive visualizations for sorting & graph algorithms — great for learning and demos.</p>
//         <ul>
//           <li>Canvas & SVG</li>
//           <li>Step-by-step animations</li>
//           <li>Performance optimized</li>
//         </ul>
//       </article>
//     </section>

//     <section id="about" class="about">
//       <h2>About Me</h2>
//       <p>
//         I’m a frontend developer focused on building performant, accessible web
//         applications. I love turning designs into pixel-perfect interfaces, and
//         I enjoy learning new tools and sharing knowledge.
//       </p>
//       <p>Skills: HTML, CSS, JavaScript, React, Tailwind, Git</p>
//     </section>

//     <section id="contact" class="contact">
//       <h2>Contact</h2>
//       <form action="#" method="post">
//         <label>
//           Name
//           <input type="text" name="name" placeholder="Your name" />
//         </label>
//         <label>
//           Email
//           <input type="email" name="email" placeholder="you@example.com" />
//         </label>
//         <label>
//           Message
//           <textarea name="message" rows="4" placeholder="Say hi!"></textarea>
//         </label>
//         <button type="submit" class="btn-primary">Send Message</button>
//       </form>
//     </section>
//   </main>

//   <footer>
//     <p>&copy; ${new Date().getFullYear()} Sumit Kumar. Built with ❤️ using React.</p>
//     <div class="social">
//       <a href="#" aria-label="GitHub">GitHub</a>
//       <a href="#" aria-label="LinkedIn">LinkedIn</a>
//       <a href="#" aria-label="Twitter">Twitter</a>
//     </div>
//   </footer>
// </body>
// </html>
// `;


//   const [display, setDisplay] = useState("");
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDisplay(codeText.slice(0, index));
//       setIndex((i) => {
//         if (i >= codeText.length) return 0; // repeat
//         return i + 1;
//       });
//     }, 50);

//     return () => clearInterval(interval);
//   }, [index]);

//   return (
//     <pre className="text-green-400 text-sm md:text-base whitespace-pre-wrap">
//       {display}
//     </pre>
//   );
// }



import { useState, useEffect } from "react";

export default function LiveCode() {
 const snippets = [
    `
<!-- Hero Section -->
<section id="hero">
  <h1>Hey, I'm Sumit</h1>
  <p>React Developer • Frontend • UI Designer</p>
  <button>Explore Projects</button>
</section>
    `,

    `
<!-- Navbar -->
<nav class="navbar">
  <a href="#home">Home</a>
  <a href="#projects">Projects</a>
  <a href="#skills">Skills</a>
  <a href="#contact">Contact</a>
</nav>
    `,

    `
<!-- Project Card -->
<div class="project-card">
  <img src="project.png" alt="Project" />
  <h3>Weather App</h3>
  <p>5-day forecast • Real-time weather • GPS based</p>
</div>
    `,

    `
/* Button Styling */
.btn {
  padding: 12px 28px;
  background: linear-gradient(90deg, #ff3c6e, #884dff);
  border-radius: 30px;
  font-weight: 600;
  transition: 0.3s;
}
.btn:hover {
  transform: scale(1.05);
}
    `,

    `
<!-- Contact Form -->
<form>
  <input type="text" placeholder="Your Name" />
  <input type="email" placeholder="your@email.com" />
  <textarea rows="4" placeholder="Message..."></textarea>
  <button type="submit">Send Message</button>
</form>
    `,
  ]; 

  const [displayedText, setDisplayedText] = useState("");
  const [currentSnippet, setCurrentSnippet] = useState(0);

  useEffect(() => {
    let i = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + snippets[currentSnippet][i]);
      i++;

      if (i >= snippets[currentSnippet].length) {
        clearInterval(interval);

        // 2 seconds ke baad next snippet choose karo
        setTimeout(() => {
          setCurrentSnippet(
            Math.floor(Math.random() * snippets.length)
          );
        }, 2000);
      }
    }, 20); // speed → 20ms per letter (fast)

    return () => clearInterval(interval);
  }, [currentSnippet]);

  return (
    <pre className="text-green-400 text-sm md:text-base p-4 font-mono whitespace-pre-wrap">
      {displayedText}
      <span className="animate-pulse">|</span>
    </pre>
  );
}
