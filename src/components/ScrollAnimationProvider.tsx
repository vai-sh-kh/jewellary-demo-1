"use client";

import { useEffect } from "react";

export default function ScrollAnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize scroll animations for all elements with data-scroll-animate attribute
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const animationType = element.getAttribute("data-scroll-animate") || "fadeInUp";
          element.classList.add("animate-in");
          observer.unobserve(element);
        }
      });
    }, observerOptions);

    // Observe all elements with data-scroll-animate attribute
    const elements = document.querySelectorAll("[data-scroll-animate]");
    elements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return <>{children}</>;
}

