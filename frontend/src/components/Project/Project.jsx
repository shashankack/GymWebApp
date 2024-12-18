import React, { useEffect, useRef } from "react";
import "./Project.css";
/* import video1 from "../../public/studio.mp4"

const projects = [
  { id: 1, title: 'STUDIO MASON', description: 'Here is the new, light, and entertaining format of the series that we are excited to present to you format of the series that we are excited to', name: 'e-comm', image: video1, description1:'we live lit', description2: 'test description two' },
  { id: 2, title: 'UNNECESSARY', description: 'Here is the new, light, and entertaining format of the series that we are excited to present to you format of the series that we are excited to', name: 'e-comm', image: video1, description1:'we live lit', description2: 'test description two' },
  { id: 3, title: 'UNNECESSARY', description: 'Here is the new, light, and entertaining format of the series that we are excited to present to you format of the series that we are excited to', name: 'e-comm', image: video1, description1:'we live lit', description2: 'test description two' },
  { id: 4, title: 'UNNECESSARY', description: 'Here is the new, light, and entertaining format of the series that we are excited to present to you format of the series that we are excited to', name: 'e-comm', image: video1, description1:'we live lit', description2: 'test description two' },
  { id: 5, title: 'UNNECESSARY', description: 'Here is the new, light, and entertaining format of the series that we are excited to present to you format of the series that we are excited to', name: 'e-comm', image: video1, description1:'we live lit', description2: 'test description two' },
]; */

const Project = ({ projects }) => {
  const projectRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = projectRefs.current.indexOf(entry.target);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          if (index > 0) {
            projectRefs.current[index - 1].classList.add("fade-out");
          }
        } else {
          entry.target.classList.remove("show");
          if (index > 0) {
            projectRefs.current[index - 1].classList.remove("fade-out");
          }
        }
      });
    }, options);

    if (projectRefs.current) {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }

    return () => {
      if (projectRefs.current) {
        projectRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);

  return (
    <div className="projects-container" id="project">
      {projects.map((project, index) => (
        <div
          key={project.id}
          ref={(el) => (projectRefs.current[index] = el)}
          className={`project-card bg-${project.id}`}
        >
          <img className="proj-img" src={project.defaultImg} />
          <h2 className="title">{project.title}</h2>
          
          <p className="des">{project.description}</p>
          <span className="name">{project.name}</span>
          <p className="desc-1">{project.description1}</p>
          <p className="desc-2">{project.description2}</p>
        </div>
      ))}
    </div>
  );
};

export default Project;
