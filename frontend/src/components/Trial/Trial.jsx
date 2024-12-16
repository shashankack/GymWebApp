import { useRef, useEffect } from "react";
import gsap from "gsap";
import "./Trial.css";
import image from "../../assets/trial-img.png";
import gradient from "../../assets/Rectangle_Gradient.webp";

const Trial = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

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
      { clipPath: "inset(0% 100% 0% 0%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.5,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <section className="trial-section" id="trial" ref={sectionRef}>
      <div className="trial-text-container">
        <h1 className="trial-title">Trial Training</h1>
        <img className="gradient-underline" ref={imageRef} src={gradient} />
        <p className="trial-text">
          You want to try out a free training session with us? No problem! Just
          come by during our regular opening hours and talk to our team at the
          desk.
        </p>
        <p className="trial-text">
          There, we'll advise you, find a suitable date together, and give you a
          tour of the gym.Please note that due to high demand, we can rarely
          offer same-day appointments.
        </p>
        <p className="trial-text">
          For additional useful information about your trial training, please
          visit our Helpcenter.
        </p>
      </div>
      <img className="trial-image" src={image} ref={imageRef} />
    </section>
  );
};

export default Trial;
