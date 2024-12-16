import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Home.css";

const Home = () => {
  const homeTitleRef = useRef([]);
  const homeTextRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      homeTitleRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.5,
        duration: 2,
        ease: "power4.inOut",
      }
    )

    gsap.fromTo(
      homeTextRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        delay: 1.5,
        ease: "power4.inOut",
        }
    )
  }, []);

  return (
    <section className="hero-section" id="hero">
      {/* <div class="gradient-overlay"></div> */}
      <div className="hero-content">
        <h1 ref={(el) => (homeTitleRef.current[0] = el)} className="hero-title">
          Martial arts.
        </h1>
        <h1 ref={(el) => (homeTitleRef.current[1] = el)} className="hero-title">
          From Raghu.
        </h1>
        <h1 ref={(el) => (homeTitleRef.current[2] = el)} className="hero-title">
          With Love.
        </h1>
        <p ref={homeTextRef} className="hero-text">
          Come by and train with us in Bengaluru. A fantastic
          community with experienced coaches awaits you. Together, we bring out
          the best in you.
        </p>
        <a href="#" className="hero-button">
          Discover all Classes
        </a>
      </div>
    </section>
  );
};

export default Home;
