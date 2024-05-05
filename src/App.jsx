import "./App.css";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import photo1 from "./assets/Picture1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./component/NavBar";

function App() {
  const [scrollPos, setScrollPos] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [scrollPos1, setScrollPos1] = useState(0);
  const [ref1, inView1] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const isScrollingDown = scrollPos && inView > 0;
  const isScrollingDown1 = scrollPos1 && inView1 > 0;

  useEffect(() => {
    const onScroll = () => {
      setScrollPos(window.scrollY);
      setScrollPos1(window.scrollY);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="header-bar adjustable-padding">
        <NavBar />
      </header>
      <main>
        <section
          aria-label="hero section"
          className="hero-section adjustable-padding min-height"
        >
          <div className="hero-container">
            <h1 className="hero-heading">Andrew Ocegueda</h1>
            <div className="picture-container">
              <img
                src={photo1}
                alt="Picture of Andrew Ocegueda"
                className="profile-pic"
              />
            </div>
            <p className="hero-about-me">
              I am Andrew Ocegueda, a Senior Computer Science with Business
              Applications Student (CSBA) attending University of California,
              Riverside.
            </p>
          </div>
        </section>
        <section
          ref={ref}
          className={`about-me adjustable-padding min-height invisible ${
            isScrollingDown ? "animate-on-scroll" : ""
          }`}
          aria-label="about me"
        >
          <h2>About Me</h2>
          <p>
            I am a Senior Computer Science with Business Applications Student
            (CSBA) attending University of California, Riverside. I am a highly
            motivated individual who is passionate about technology and its
            applications. I am a quick learner and a team player who is always
            looking for ways to improve and grow. I am currently seeking a
            full-time position in software engineering or data science.
          </p>
        </section>
        <section
          ref={ref1}
          className={`education-container adjustable-padding min-height invisible ${
            isScrollingDown1 ? "animate-on-scroll" : ""
          }`}
          aria-label="education section"
        >
          <h2>Education</h2>
          <section>
            <h3>
              University of California, Riverside{" "}
              <span className="right">August 2021 - June 2024</span>
            </h3>
            <p>
              Bachelor of Science in Computer Science with Business Applications
            </p>
          </section>
          <section>
            <h3>
              Moreno Valley College{" "}
              <span className="right">June 2018 - June 2021</span>
            </h3>
            <p>Computer Science for Transfer</p>
          </section>
        </section>
        <section className="adjustable-padding min-height">
          <h2>Projects</h2>
          <section>
            <h3>Full Stack Website</h3>
            <p>
              With a team of 4 people, we built a full stack web application
              utilizing React, Node, Express, Axios, React Router, FastAPI, and
              MongoDB
            </p>
            <FontAwesomeIcon icon={faGithub} aria-label="react logo" />
          </section>
          <section>
            <h3>Dynamic Programming Algorithm</h3>
            <p>
              I created a program that utilizes dynamic programming to find the
              shortest amount of edits between two words
            </p>
            <FontAwesomeIcon icon={faGithub} aria-label="react logo" />
          </section>
          <section>
            <h3>Arduino Alarm Clock</h3>
            <p>
              I created a the hardware and software portion of the alarm clock
              using components from an Arduino set and using the official
              Arduino IDE to run C code on the UNO 3
            </p>
            <FontAwesomeIcon icon={faGithub} aria-label="react logo" />
          </section>
        </section>
        <section className="adjustable-padding min-height">
          <h2>Achievements</h2>
        </section>
      </main>
      <footer id="footer" className="adjustable-padding">
        <p>
          <a href="https://github.com/xTh3Unkn0wnx">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/andrew-ocegueda-715206230?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BhesREb0KRy2g6rmzHum7Tg%3D%3D">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} /> Phone: (999) 999-9999
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} />
          Email: aaaaaa@aaaaa.aaa{" "}
        </p>
      </footer>
    </>
  );
}

export default App;
