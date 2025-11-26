import React, { useEffect, useState } from "react";

export default function TypeWriterTitle() {
  const text = "Developer!"; 
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;

    const interval = setInterval(() => {
      if (!isDeleting && index < text.length) {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      } 
      else if (isDeleting && index > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      } 
      else if (index === text.length) {
        setTimeout(() => setIsDeleting(true), 800);
      } 
      else if (index === 0 && isDeleting) {
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [index, isDeleting]);

  return (
    <span className="border-r-4 border-(--brand-primary) ">
        {displayText}
    </span>
    
  );
}
