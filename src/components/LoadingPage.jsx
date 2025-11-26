


import React, { useEffect, useRef, useState } from "react";

export default function LoadingScreen({
  duration = 4000,
  onFinish = () => {},
  text = "PORTFOLIO",
}) {
  const [count, setCount] = useState(1);
  const [lineBaseWidth, setLineBaseWidth] = useState(300);
  const [isFading, setIsFading] = useState(false);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  // Measure the text width (and update on resize)
  useEffect(() => {
    function measure() {
      if (textRef.current) {
        // add small extra padding so progress appears exactly aligned visually
        setLineBaseWidth(Math.ceil(textRef.current.offsetWidth));
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // increment logic: compute interval so count reaches 100 in duration ms
  useEffect(() => {
    const steps = 100 - 1; // from 1 to 100 inclusive
    const intervalMs = Math.max(8, Math.floor(duration / steps)); // minimum speed clamp
    const id = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(id);
          return 100;
        }
        return prev + 1;
      });
    }, intervalMs);

    return () => clearInterval(id);
  }, [duration]);

  // when reach 100 -> trigger fade-out and call onFinish after fade duration
  useEffect(() => {
    if (count >= 100) {
      // small delay so final visual settles, then fade
      const fadeDelay = 150;
      const fadeDuration = 600; // must match CSS transition
      const t1 = setTimeout(() => setIsFading(true), fadeDelay);
      const t2 = setTimeout(() => onFinish(), fadeDelay + fadeDuration + 50);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [count, onFinish]);

  // compute progress width relative to measured text width
  const progressPx = Math.round((count / 100) * lineBaseWidth);

  // 3D transform parameters based on progress
  // translateZ from 0 -> 24px and rotateY slightly for depth
  const depth = (count / 100) * 24;
  const rotateY = (1 - count / 100) * 6; // start slightly rotated, settle to 0

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black text-white transition-opacity duration-600 ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ perspective: "900px" }}
    >
      <div className="flex flex-col items-center">
        {/* top row: text + number */}
        <div className="flex items-end gap-4">
          <h1
            ref={textRef}
            className="text-5xl md:text-6xl font-extrabold tracking-widest"
            style={{
              transformStyle: "preserve-3d",
              transform: `translateZ(${depth}px) rotateY(${rotateY}deg)`,
              transition: "transform 120ms linear",
              letterSpacing: "0.12em",
            }}
          >
            {text}
          </h1>

          <span
            className="text-3xl md:text-4xl font-semibold"
            style={{
              transform: `translateZ(${Math.min(depth + 6, 28)}px)`,
              transition: "transform 120ms linear",
              minWidth: 56, // keep layout stable
              textAlign: "left",
            }}
          >
            {count}
          </span>
        </div>

        {/* progress line container (width equals measured text width) */}
        <div
          className="mt-6 h-1 bg-gray-700 rounded overflow-hidden"
          style={{
            width: `${lineBaseWidth}px`,
            // ensure smooth perspective of the line too
            transform: `translateZ(${depth / 2}px)`,
            transition: "transform 120ms linear",
          }}
        >
          {/* filling bar */}
          <div
            className="h-full bg-white"
            style={{
              width: `${progressPx}px`,
              transition: "width 70ms linear",
            }}
          />
        </div>

        {/* subtle 3D shadow / reflection to emphasize depth */}
        <div
          aria-hidden
          className="mt-2 w-full"
          style={{
            width: `${lineBaseWidth}px`,
            height: 6,
            transform: `translateZ(${depth / 3}px)`,
            filter: `blur(${Math.max(0, (24 - depth) / 8)}px)`,
            opacity: 0.06,
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.18), rgba(255,255,255,0))",
          }}
        />
      </div>
    </div>
  );
}
