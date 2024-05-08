import './App.css';
import { useEffect } from 'react';
import photo1 from './assets/Picture1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimation } from 'framer-motion';
import NavBar from './component/NavBar';
import Section from './component/Section';
import { container, item, item2 } from './component/Animation';

function App() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [1, 1.5, 0.5, 1],
      rotate: [0, 360],
      transition: { duration: 1 },
    });
  }, [controls]);

  return (
    <>
      <header
        className='header-bar adjustable-padding'
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          color: 'white',
        }}
      >
        <NavBar />
      </header>
      <main>
        <section
          aria-label='hero section'
          className='hero-section adjustable-padding min-height'
          style={{
            paddingTop: '200px',
          }}
        >
          <div className='hero-container'>
            <h1
              className='hero-heading'
              style={{
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.60)',
                marginBottom: '30px',
              }}
            >
              Andrew Ocegueda
            </h1>
            <motion.div
              className='picture-container'
              animate={controls}
            >
              <motion.img
                src={photo1}
                alt='Picture of Andrew Ocegueda'
                className='profile-pic'
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.5, type: 'spring', bounce: 0.5 },
                }}
              />
            </motion.div>
            <p
              className='hero-about-me'
              style={{
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                marginTop: '30px',
              }}
            >
              I am Andrew Ocegueda, a Senior Computer Science with Business
              Applications Student (CSBA) attending University of California,
              Riverside.
            </p>
          </div>
        </section>
        <Section
          section_title='About Me'
          classnames='about-me adjustable-padding min-height'
          container_motion={{
            variants: container,
            initial: 'hidden',
            whileInView: 'show',
            viewport: { once: true },
          }}
          item_motion={{
            variants: item,
          }}
          styleCon={{
            style: {
              backgroundColor: 'rgba(0, 0, 0, 0.95)',
              color: 'white',
            },
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            qui distinctio, soluta sint placeat vero architecto quisquam minus
            doloribus hic expedita in, dignissimos excepturi molestias eum quod
            pariatur. Repudiandae, veritatis.
          </p>
          <p>
            Error vel commodi odit eveniet placeat. Qui dolores, voluptatem
            cumque ex mollitia delectus magni quisquam amet ad tenetur placeat,
            vel ipsa. Error eveniet alias ullam voluptatum quas corrupti nemo
            distinctio.
          </p>
          <p>
            Vitae ipsa dolorem rerum repellendus temporibus dolor in,
            perferendis provident omnis saepe magni quos totam impedit nisi
            earum modi. Eius saepe hic deserunt. Provident ducimus labore
            voluptatem debitis possimus eius!
          </p>
          <p>
            Blanditiis itaque facere, accusamus expedita rerum amet quasi magnam
            voluptatum, neque, modi error sed saepe ipsum pariatur illum ipsa
            fugiat non odit ad quod? Non obcaecati molestiae exercitationem
            deleniti officiis.
          </p>
          <p>
            Eum, nobis quia dolorum sequi omnis atque, harum delectus voluptatem
            ex esse quaerat totam sint explicabo. Cumque autem dolores laborum!
            Praesentium non facere doloremque, exercitationem velit quae ipsam
            cupiditate accusantium?
          </p>
          <p>
            Similique officiis, quam dolorem quas soluta deserunt harum odio
            delectus, assumenda totam doloribus! Iusto nisi necessitatibus
            cupiditate! Excepturi repellendus ipsum dolor animi voluptates
            ducimus odit, quisquam, reiciendis quaerat placeat officia.
          </p>
          <p>
            Deserunt esse rem doloremque corrupti deleniti delectus ullam
            ratione iusto facere beatae nam, repellendus dicta fugiat non cum
            neque consectetur impedit voluptas nesciunt quibusdam unde quasi
            laboriosam aliquid omnis? Debitis!
          </p>
          <p>
            Eum deserunt hic veniam, ducimus delectus temporibus! Eaque impedit,
            quae nulla culpa repudiandae ad iste ipsa atque at alias illo fugit
            maxime optio consequatur iusto tempore aspernatur rem eos ut!
          </p>
          <p>
            Modi expedita natus nam laudantium. Magni pariatur error harum quod
            architecto animi sit corporis optio voluptate tempora, distinctio
            perspiciatis, omnis aut impedit assumenda alias mollitia laudantium
            nostrum! Deleniti, commodi asperiores.
          </p>
          <p>
            Veniam vero eum laborum ex eveniet aut doloribus expedita quod.
            Accusamus non voluptates temporibus suscipit illo, deleniti itaque
            repudiandae corporis molestias recusandae asperiores placeat iste
            aliquid tempore quae! Eveniet, quibusdam.
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
          section_title='Education'
          classnames={'education-container'}
          container_motion={{
            variants: container,
            initial: 'hidden',
            whileInView: 'show',
            viewport: { once: true },
          }}
          item_motion={{
            variants: item2,
          }}
          styleCon={{
            style: {
              backgroundColor: 'rgba(0, 0, 0, 0.90)',
              color: 'white',
            },
          }}
        >
          <section>
            <h3>
              University of California, Riverside{' '}
              <span className='right'>August 2021 - June 2024</span>
            </h3>
            <p>
              Bachelor of Science in Computer Science with Business Applications
            </p>
          </section>
          <section>
            <h3>
              Moreno Valley College{' '}
              <span className='right'>June 2018 - June 2021</span>
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
          section_title={'Projects'}
          container_motion={{
            variants: container,
            initial: 'hidden',
            whileInView: 'show',
            viewport: { once: true },
          }}
          item_motion={{
            variants: item,
          }}
          styleCon={{
            style: {
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              color: 'white',
            },
          }}
        >
          <section>
            <h3>Full Stack Website</h3>
            <p>
              With a team of 4 people, we built a full stack web application
              utilizing React, Node, Express, Axios, React Router, FastAPI, and
              MongoDB
            </p>
            <FontAwesomeIcon
              icon={faGithub}
              aria-label='react logo'
            />
          </section>
          <section>
            <h3>Dynamic Programming Algorithm</h3>
            <p>
              I created a program that utilizes dynamic programming to find the
              shortest amount of edits between two words
            </p>
            <FontAwesomeIcon
              icon={faGithub}
              aria-label='react logo'
            />
          </section>
          <section>
            <h3>Arduino Alarm Clock</h3>
            <p>
              I created a the hardware and software portion of the alarm clock
              using components from an Arduino set and using the official
              Arduino IDE to run C code on the UNO 3
            </p>
            <FontAwesomeIcon
              icon={faGithub}
              aria-label='react logo'
            />
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
        <Section
          section_title={'Achievements'}
          styleCon={{
            style: {
              backgroundColor: 'rgba(0, 0, 0, 0.80)',
              color: 'white',
            },
          }}
        ></Section>
        {/* <section className="adjustable-padding min-height">
          <h2>Achievements</h2>
        </section> */}
      </main>
      <footer
        id='footer'
        className='adjustable-padding'
      >
        <p>
          <a href='https://github.com/xTh3Unkn0wnx'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </p>
        <p>
          <a href='https://www.linkedin.com/in/andrew-ocegueda-715206230?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BhesREb0KRy2g6rmzHum7Tg%3D%3D'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} /> Phone: (999) 999-9999
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} />
          Email: aaaaaa@aaaaa.aaa{' '}
        </p>
      </footer>
    </>
  );
}

export default App;
