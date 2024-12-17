import { useRef, useEffect } from "react";
import gsap from "gsap";
import "./NewPage.css";
import img from "../../assets/about_us.webp";

const NewPage = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      scale: 1.3, // Target scale
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 30%", // Start scaling when the top of the section hits the top of the viewport
        end: "bottom top", // End scaling when the bottom of the section hits the top of the viewport
        scrub: true, // Smoothly scrub the animation based on scroll
      },
    });
  }, []);

  return (
    <section className="new-page-section" id="new-page" ref={sectionRef}>
      <img src={img} className="about-us" ref={imageRef} />
      <div className="about-us-text">
        <h1 className="about-us-title">About Us</h1>
      </div>
    </section>
  );
};

export default NewPage;
