import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Footer.css";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1, // Smoothness factor
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // GSAP Animation
    gsap.set(footerRef.current, { yPercent: -50 });

    gsap.to(footerRef.current, {
      yPercent: 0,
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "bottom bottom",
        end: "+=75%",
        scrub: true,
      },
    });

    // Clean-up
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <section className="conclusion" ref={triggerRef}></section>
      <footer className="footer">
        <section className="footer-container" ref={footerRef}>
            <div className="footer-logo">RAGHU</div>
          <div className="footer-row">
            Footer Here
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
