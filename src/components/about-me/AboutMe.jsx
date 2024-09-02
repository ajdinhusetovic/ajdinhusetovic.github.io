import "./aboutMe.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const AboutMe = () => {
  const scrollRef = useRef();
  const aboutMeScrollRef = useRef();
  const aboutMeTextRef = useRef();

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Animations for desktop and tablet views
    mm.add("(min-width: 768px)", () => {
      // Animation for skills
      gsap.from(".skills-container p", {
        y: 20,
        opacity: 0,
        stagger: {
          amount: 1,
          grid: [2, 1],
          axis: "y",
          ease: "circ.inOut",
        },
        scrollTrigger: {
          trigger: scrollRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Animation for "About Me" heading and paragraph
      gsap.from("#about-me-text", {
        y: 500,
        ease: "power1.inOut",
        scale: 1.5,
        scrollTrigger: {
          trigger: aboutMeScrollRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      gsap.from("#about-me-para", {
        y: 500,
        ease: "power1.inOut",
        scale: 1.5,
        scrollTrigger: {
          trigger: aboutMeScrollRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      // Animation for "My profile" section text
      gsap.from(aboutMeTextRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "circ.inOut",
        scrollTrigger: {
          trigger: aboutMeTextRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    // Animations for mobile views
    mm.add("(max-width: 767px)", () => {
      // Animation for skills
      gsap.from(".skills-container p", {
        y: 10,
        opacity: 0,
        stagger: {
          amount: 0.8,
          grid: [2, 1],
          axis: "y",
          ease: "circ.inOut",
        },
        scrollTrigger: {
          trigger: scrollRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      // Animation for "About Me" heading and paragraph
      gsap.from("#about-me-text", {
        y: 800,
        ease: "power1.inOut",
        scale: 1.2,
        scrollTrigger: {
          trigger: aboutMeScrollRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      gsap.from("#about-me-para", {
        y: 800,
        ease: "power1.inOut",
        scale: 1.2,
        scrollTrigger: {
          trigger: aboutMeScrollRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // Animation for "My profile" section text
      gsap.from(aboutMeTextRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "circ.inOut",
        scrollTrigger: {
          trigger: aboutMeTextRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    });

    // Clean up matchMedia listeners on component unmount
    return () => mm.revert();
  }, []);

  return (
    <>
      <article className="about-me-wrapper" id="about-me">
        <div className="about-me-first" ref={aboutMeScrollRef}>
          <h1 id="about-me-text">About Me</h1>
          <p id="about-me-para">
            Below you can read more about me and my skills
          </p>
        </div>
        <div className="about-me-wrapper-content">
          <section className="about-me-text" ref={aboutMeTextRef}>
            <h1>My profile</h1>
            <p>
              I am a Full Stack Developer with a bit over 1.5 years of
              experience. I'm extremely passionate about coding and building
              things on the web. I love learning and I'm always learning new
              things, along with improving and expanding my existing knowledge.
              I thrive on leveraging my skills to craft innovative solutions and
              contribute to existing projects.
            </p>
            <p>
              I'm open to job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>
          </section>
          <section className="about-me-skills">
            <h1>Skills</h1>
            <div className="skills-container" ref={scrollRef}>
              <p>HTML/CSS</p>
              <p>SCSS</p>
              <p>TailwindCSS</p>
              <p>JavaScript</p>
              <p>TypeScript</p>
              <p>React</p>
              <p>Node.js</p>
              <p>Express.js</p>
              <p>NestJS</p>
              <p>MongoDB</p>
              <p>PostgreSQL</p>
              <p>Python</p>
              <p>Next.js</p>
              <p>tRPC</p>
            </div>
          </section>
        </div>
      </article>
    </>
  );
};
