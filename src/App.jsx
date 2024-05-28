import './App.css';
import React, { Suspense, useEffect, useState } from 'react';
import photo1 from './assets/Picture1.png';
import ucr from './assets/UCR.jpg';
import mvc from './assets/MVC.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion, useAnimation } from 'framer-motion';
import NavBar from './component/NavBar';
import Section from './component/Section';
import Footer from './component/Footer';
import { container, item, item2 } from './component/Animation';
const CubeScene = React.lazy(() => import('./component/Cube'));

function App() {
  const controls = useAnimation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    controls.start({
      scale: [1, 1.5, 0.5, 1],
      rotate: [0, 360],
      transition: { duration: 1 },
    });
  }, [controls]);

  return (
    <>
      <header className='header-bar adjustable-padding header-bar-adjustable'>
        <NavBar />
      </header>
      <div id='top'></div>
      <main id='main'>
        <section
          aria-label='hero section'
          id='hero'
          className='hero-section adjustable-padding min-height hero-section-adjustable'
        >
          <div className='hero-container'>
            <motion.h1
              className='hero-heading hero-heading-adjustable'
              whileHover={{ y: -30 }}
            >
              <div className='flex-center'>
                <div
                  className='flex-center'
                  style={{ margin: '0 auto' }}
                >
                  {windowWidth > 700 && (
                    <Suspense fallback={<div>Loading...</div>}>
                      <CubeScene cubeSize={[3, 3, 3]} />
                    </Suspense>
                  )}
                  Andrew Ocegueda
                  {windowWidth > 700 && (
                    <Suspense fallback={<div>Loading...</div>}>
                      <CubeScene cubeSize={[3, 3, 3]} />
                    </Suspense>
                  )}
                </div>
              </div>
            </motion.h1>
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
            <motion.p
              className='hero-about-me hero-about-me-adjustable'
              whileHover={{ y: 20 }}
            >
              I am Andrew Ocegueda, a Senior Computer Science with Business
              Applications Student (CSBA) attending University of California,
              Riverside.
            </motion.p>
          </div>
        </section>
        <Section
          windowWidth={windowWidth}
          section_title='About Me'
          section_id='about-me'
          classnames='about-me adjustable-padding min-height'
          container_motion={{
            variants: container,
            initial: 'hidden',
            whileInView: 'show',
            viewport: { once: true, amount: 0.3 },
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
            I have personal experience in developing full stack web applications
            using the MERN stack and programming in languages such as C++, Java,
            Python and Rust. I hope to gain more experience in the field of
            software engineering, and possibly even data science. I am always
            looking for ways to improve my skills and learn new technologies. I
            enjoy trying to solve problems and create new applications that
            solve real world problems.
          </p>
        </Section>
        <Section
          windowWidth={windowWidth}
          section_title='Education/Skills'
          section_id='education'
          classnames={'education-container'}
          container_motion={{
            variants: container,
            initial: 'hidden',
            whileInView: 'show',
            viewport: { once: true, amount: 0.3 },
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
            <h3 className='flex-center'>
              <div>
                <Suspense fallback={<div>Loading...</div>}>
                  <CubeScene
                    cubeSize={[2, 2, 2]}
                    size='4rem'
                  />
                </Suspense>
              </div>
              <div>
                University of California, Riverside{' '}
                <span className='right'>August 2021 - June 2024</span>
              </div>
            </h3>
            <p className='flex-center'>
              Bachelor of Science in Computer Science with Business Applications
            </p>
            <div className='image-container'>
              <img
                src={ucr}
                alt='Logo of UCR'
                className='logo-img'
              />
            </div>
          </section>
          <section>
            <h3 className='flex-center'>
              <div>
                <Suspense fallback={<div>Loading...</div>}>
                  <CubeScene
                    cubeSize={[2, 2, 2]}
                    size='4rem'
                  />
                </Suspense>
              </div>
              <div>
                Moreno Valley College{' '}
                <span className='right'>June 2018 - June 2021</span>
              </div>
            </h3>
            <p className='flex-center'>Computer Science for Transfer</p>
            <div className='image-container'>
              <img
                src={mvc}
                alt='Logo of Moreno Valley College'
                className='logo-img'
              />
            </div>
          </section>
          <section>
            <h2 className='flex-center'>
              <div>
                <Suspense fallback={<div>Loading...</div>}>
                  <CubeScene
                    cubeSize={[2, 2, 2]}
                    size='4rem'
                  />
                </Suspense>
              </div>
              <div>Skills & Technologies</div>
            </h2>
            <ul className='skills-grid'>
              <li className='flex-center'>Python</li>
              <li className='flex-center'>Java</li>
              <li className='flex-center'>JavaScript</li>
              <li className='flex-center'>React</li>
              <li className='flex-center'>NodeJS</li>
              <li className='flex-center'>Express</li>
              <li className='flex-center'>MongoDB</li>
              <li className='flex-center'>C/C++</li>
              <li className='flex-center'>HTML/CSS</li>
              <li className='flex-center'>SQL</li>
              <li className='flex-center'>Git</li>
              <li className='flex-center'>Framer Motion</li>
              <li className='flex-center'>ThreeJS/Fiber</li>
              <li className='flex-center'>Rust</li>
              <li className='flex-center'>Github</li>
              <li className='flex-center'>Docker</li>
              <li className='flex-center'>FastAPI</li>
              <li className='flex-center'>Arduino</li>
            </ul>
          </section>
        </Section>
        <Section
          windowWidth={windowWidth}
          section_title={'Projects'}
          section_id='projects'
          container_motion={{
            variants: container,
            initial: 'hidden',
            whileInView: 'show',
            viewport: { once: true, amount: 0.3 },
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
            <h3 className='big'>
              Full Stack Website{' '}
              <span className='projects-text'>Live Active</span>
            </h3>
            <p className='projects-text small'>
              Technologies: React, MongoDB Atlas, Express, NodeJS, React Router,
              Fast API
            </p>
            <p>
              With a team of 4 people, we built a full stack web application
              utilizing React, Node, Express, Axios, React Router, FastAPI, and
              MongoDB. It has a simple login in feature that allows for new
              users to create an account or existing users to login. The website
              also has a feature that allows users to create, read, update, and
              delete posts regarding meals plans or exercises.
            </p>
            <a href='https://github.com/xTh3Unkn0wnx/CS-180-Live-Active'>
              <FontAwesomeIcon
                icon={faGithub}
                aria-label='react logo'
              />
            </a>
          </section>
          <section>
            <h3 className='big'>Dynamic Programming Algorithm</h3>
            <p className='projects-text small'>Technologies: C++</p>
            <p>
              I created a program that utilizes dynamic programming to find the
              shortest amount of edits between two words. For example, to Change
              &quot;Goblin&quot; to &quot;Goblet&quot; it would take 2 edits.
              Replacing the i with an e and replacing n with t.
            </p>
            <a href='https://github.com/xTh3Unkn0wnx/CS_141_Final_Project'>
              <FontAwesomeIcon
                icon={faGithub}
                aria-label='react logo'
              />
            </a>
          </section>
          <section>
            <h3 className='big'>Arduino Alarm Clock</h3>
            <p className='projects-text small'>
              Technologies: Arduino UNO R3, Arduino Components, Arduino IDE,
              74HC595 Shift Register, Passive Buzzer, 2x16 LCD Display
            </p>
            <p>
              I created a the hardware and software portion of the alarm clock
              using components from an Arduino set and using the official
              Arduino IDE to run C code on the UNO 3. The major components I
              have used was the Passive Buzzer, a Shift Register and a LCD
              Screen.
            </p>
            <a href='https://github.com/xTh3Unkn0wnx/Arduino_Projects/tree/main/CS_120B_Final_Project'>
              <FontAwesomeIcon
                icon={faGithub}
                aria-label='react logo'
              />
            </a>
          </section>
        </Section>
        <Section
          windowWidth={windowWidth}
          section_title={'Achievements'}
          section_id='achievements'
          container_motion={{
            variants: container,
            initial: 'hidden',
            whileInView: 'show',
            viewport: { once: true, amount: 0.3 },
          }}
          item_motion={{
            variants: item,
          }}
          styleCon={{
            style: {
              backgroundColor: 'rgba(0, 0, 0, 0.80)',
              color: 'white',
            },
          }}
        >
          <ul>
            <li>Dean&apos;s List</li>
            <p>Have a 3.5 GPA for the quarter</p>
          </ul>
          <ul>
            <li>Chancellor&apos;s List</li>
            <p>Maintain a 3.5 GPA for 3 consecutive quarters</p>
          </ul>
        </Section>
        <Section
          windowWidth={windowWidth}
          section_title={'Interests'}
          section_id={'interests'}
          container_motion={{
            variants: container,
            initial: 'hidden',
            whileInView: 'show',
            viewport: { once: true, amount: 0.3 },
          }}
          item_motion={{
            variants: item,
          }}
          styleCon={{
            style: {
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              color: 'white',
            },
          }}
        >
          <p>
            I am a Video Game Enthusiast, I enjoy playing games on the PS5 or on
            a PC.Some games I enjoy are: The Witcher 3, Cyberpunk 2077,
            Minecraft, Fallout 4 (Vanilla and Modded), and many more. I enjoy
            mostly playing solo games but I do enjoy playing multiplayer games
            with friends from time to time.
          </p>
          <p>
            I also enjoy watching animated shows and movies. Some of my favorite
            shows are Regular Show, Amazing World of Gumball, and Adventure
            Time. There is something about the art style and the humor that I
            enjoy from these animated shows that are not present in other shows.
          </p>
          <p>
            I also watch many YouTubers who have a background in Web Development
            or Software Engineering. Some content creators I watch are
            FireshipTV, Theo - t3.gg, and Dave Gray. I not only get to learn new
            things on the topic of software engineering or learn what is going
            on in the field, I get a good laugh out of their spin for their
            content.
          </p>
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default App;
