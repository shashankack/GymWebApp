import { useRef, useEffect } from "react";
import gsap from "gsap";
import "./NewPage.css";
import img from "../../assets/about_us.webp";
import GradientImg from "../../assets/Rectangle_Gradient.webp";

const NewPage = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      scale: 1.4, // Target scale
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 30%", // Start scaling when the top of the section hits the top of the viewport
        end: "bottom top", // End scaling when the bottom of the section hits the top of the viewport
        scrub: true, // Smoothly scrub the animation based on scroll
      },
    });
  }, []);

  useEffect(() => {
    gsap.to(gradientRef.current, {
      scale: 1.4, // Target scale
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 30%",
        end: "bottom top",
        scrub: true, 
      },
    });
  }, []);

  return (
    <section className="about-us-section" id="new-page" ref={sectionRef}>
      <div className="about-us-container">
        <img className="about-us-image" src={img} ref={imageRef} />
        <div className="about-us-image-wrapper">
          <img src={GradientImg} className="about-us-gradient" ref={gradientRef} />
          <h1 className="about-us-heading">ABOUT US</h1>
        </div>
        <div className="about-us-text-container">
          <p className="about-us-text">
            We founded the gym in 2010 and have been based at Moritzplatz ever
            since. Originally starting as a pure MMA gym, over time, we have
            evolved into a hub for various martial arts with a focus on MMA,
            BJJ, and Muay Thai.
          </p>
          <p className="about-us-text">
            Seven days a week, our team and community ensure a vast array of
            activities through over 140 classes. Our fitness area and spacious
            mat areas provide opportunities for independent strength and
            technique training or sparring sessions with friends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewPage;
