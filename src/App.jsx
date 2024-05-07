import "./App.css";
import { useEffect } from "react";
import photo1 from "./assets/Picture1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation } from "framer-motion";
import NavBar from "./component/NavBar";
import Section from "./component/Section";
import { container, item, item2 } from "./component/Animation";

function App() {
  const controls = useAnimation();
  // const staggerItems = stagger(0.2);
  console.log(controls);
  useEffect(() => {
    controls.start({
      scale: [1, 1.5, 0.5, 1],
      rotate: [0, 360],
      transition: { duration: 2 },
    });
  }, [controls]);

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
            <motion.div
              className="picture-container"
              animate={controls}
              // transition={{ duration: 4 }}
              whileTap={{
                scale: [1, 1.5, 0.5, 1],
                rotate: [0, 360],
                // transition: { duration: 0.5 },
                // rotate: 360
              }}
            >
              <img
                src={photo1}
                alt="Picture of Andrew Ocegueda"
                className="profile-pic"
              />
            </motion.div>
            <p className="hero-about-me">
              I am Andrew Ocegueda, a Senior Computer Science with Business
              Applications Student (CSBA) attending University of California,
              Riverside.
            </p>
          </div>
        </section>
        <Section
          section_title="About Me"
          classnames="about-me adjustable-padding min-height"
          container_motion={{
            variants: container,
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true },
          }}
          item_motion={{
            variants: item,
          }}
        >
          <p>
            I am a Senior Computer Science with Business Applications Student
            (CSBA) attending University of California, Riverside. I am a highly
            motivated individual who is passionate about technology and its
            applications. I am a quick learner and a team player who is always
            looking for ways to improve and grow. I am currently seeking a
            full-time position in software engineering or data science.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ab
            nobis magnam, doloribus autem harum facilis officiis exercitationem
            mollitia earum adipisci explicabo, sapiente dolore! Deleniti illum
            quis quasi quibusdam vero.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At veniam,
            rerum sint atque saepe possimus maiores rem praesentium illum,
            maxime asperiores blanditiis sit beatae! Voluptas mollitia
            praesentium laboriosam aliquid quas.
          </p>
          <p>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores,
              explicabo quidem fugiat laboriosam, hic cupiditate eius illum
              officiis nisi quia quibusdam sequi suscipit dicta magnam ipsa vel
              eos quo distinctio.
            </span>
            <span>
              Quia facilis doloremque, dolore pariatur ad placeat, aliquam
              delectus est nulla voluptatem eius sunt iusto officia odio
              accusantium dolorem fugiat ipsum tempora maxime? Aut fugiat
              eveniet ipsum aperiam error maiores.
            </span>
            <span>
              Iure temporibus sit ut nulla animi tenetur illo? Ut commodi
              blanditiis, eveniet maxime praesentium accusamus iste magnam quis
              velit laudantium! Voluptate, iure! Omnis culpa dicta saepe
              explicabo nemo repellendus iure!
            </span>
            <span>
              Quis recusandae corporis quasi exercitationem! Officia, incidunt
              nesciunt, aut similique esse sapiente reiciendis animi porro
              neque, dolore sunt quo facilis. Sapiente quam vel enim praesentium
              iste. Aliquid quibusdam animi illo.
            </span>
            <span>
              Suscipit ab, inventore totam cupiditate officia quae, dicta dolor
              asperiores perferendis quia ex maiores nemo porro consequuntur
              molestias eos laborum ratione placeat obcaecati quisquam.
              Doloremque dolores sed sapiente dignissimos saepe?
            </span>
          </p>
        </Section>
        {/* <section
          className={`about-me adjustable-padding min-height `}
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
        </section> */}
        <Section
          section_title="Education"
          classnames={"education-container"}
          container_motion={{
            variants: container,
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true },
          }}
          item_motion={{
            variants: item2,
          }}
        >
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
        </Section>
        {/* <section
          className={`education-container adjustable-padding min-height`}
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
        </section> */}
        <Section
          section_title={"Projects"}
          container_motion={{
            variants: container,
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true },
          }}
          item_motion={{
            variants: item,
          }}
        >
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
        </Section>
        {/* <section className="adjustable-padding min-height">
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
        </section> */}
        <Section section_title={"Achievements"}></Section>
        {/* <section className="adjustable-padding min-height">
          <h2>Achievements</h2>
        </section> */}
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
