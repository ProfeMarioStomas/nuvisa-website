"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
