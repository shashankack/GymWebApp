import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";
import img from "../../assets/Rectangle_Gradient.webp";

import img1 from "../../assets/BJJ.webp";
import img2 from "../../assets/BOXING.webp";
import img3 from "../../assets/FITNESS.webp";
import img4 from "../../assets/MMA.webp";
import img5 from "../../assets/RECOVERY.webp";
import img6 from "../../assets/MUAY_THAI.webp";

import img1_gradient from "../../assets/BJJ_gradient.webp";
import img2_gradient from "../../assets/BOXING_gradient.webp";
import img3_gradient from "../../assets/FITNESS_gradient.webp";
import img4_gradient from "../../assets/MMA_gradient.webp";
import img5_gradient from "../../assets/RECOVERY_gradient.webp";
import img6_gradient from "../../assets/MUAY_THAI_gradient.webp";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  /* const nav = useNavigate(); */
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 50%",
        end: "top 40%",
        toggleActions: "play none none reverse",
        scrub: false,
      },
    });

    tl.fromTo(
      imageRef.current,
      { clipPath: "inset(100% 0% 0% 0%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.5,
        ease: "power2.out",
      }
    );
  }, []);

  const gridItems = [
    {
      id: 1,
      title: "BJJ",
      defaultImg: img1,
      gradientImg: img1_gradient,
      redirect: "/bjj",
    },
    {
      id: 2,
      title: "Boxing",
      defaultImg: img2,
      gradientImg: img2_gradient,
      redirect: "/boxing",
    },
    {
      id: 3,
      title: "Fitness",
      defaultImg: img3,
      gradientImg: img3_gradient,
      redirect: "/fitness",
    },
    {
      id: 4,
      title: "MMA",
      defaultImg: img4,
      gradientImg: img4_gradient,
      redirect: "/mma",
    },
    {
      id: 5,
      title: "Recovery",
      defaultImg: img5,
      gradientImg: img5_gradient,
      redirect: "/recovery",
    },
    {
      id: 6,
      title: "Muay Thai",
      defaultImg: img6,
      gradientImg: img6_gradient,
      redirect: "/muay-thai",
    },
  ];

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="content-container">
        <div className="image-wrapper">
          <h1 className="about-heading">OUR CLASSES</h1>
          <img className="gradient-underline" ref={imageRef} src={img} />
        </div>
        <p className="about-text">
          On over 1500 m², we offer you a broad spectrum of martial arts,
          fitness, and recovery. You decide for yourself whether it's Mixed
          Martial Arts, Muay Thai, Brazilian Jiu-Jitsu, boxing, or wrestling –
          at Fenriz Gym, you'll find everything a martial artist could wish for.
          Whether it's for a first trial training or as an ambitious competitor,
          we have the right course for you. For your active recovery, you can
          also attend our yoga classes or book a relaxing massage.
        </p>
        <div className="grid-container">
          {gridItems.map((item) => (
            <div
              className="grid-item card"
              key={item.id}
              onMouseEnter={() => setHoveredImage(item.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <h2>{item.title}</h2>
              <img
                src={
                  hoveredImage === item.id ? item.gradientImg : item.defaultImg
                }
                alt={item.title}
                /* onClick={ nav(item.redirect) } */
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
