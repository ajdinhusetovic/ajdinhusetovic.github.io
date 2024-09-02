import "./intro.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Intro = () => {
  useGSAP(() => {
    gsap.to("#text-one", {
      ease: "power1.inOut",
      opacity: 1,
      duration: 0.5,
      y: 0,
    });

    gsap.fromTo(
      "#text-two",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.8,
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <article className="intro-wrapper" id="intro">
      <div className="intro-wrapper-content">
        <section className="intro-wrapper-section">
          <div className="intro-wrapper-section-content">
            <h1 className="intro-wrapper-title" id="text-one">
              Hey, I'm Ajdin Husetović
            </h1>
            <p className="intro-wrapper-paragraph" id="text-two">
              I'm a Full-Stack Developer passionate about building robust and
              efficient web applications. Here, you'll find examples of my work
              across the entire stack, from front-end to back-end. Feel free to
              explore!
            </p>
          </div>
        </section>
      </div>
    </article>
  );
};
