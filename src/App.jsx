import './App.css';
import React, { Suspense, useEffect } from 'react';
import photo1 from './assets/Picture1.png';
import ucr from './assets/UCR.jpg';
import mvc from './assets/MVC.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimation } from 'framer-motion';
import NavBar from './component/NavBar';
import Section from './component/Section';
import { container, item, item2 } from './component/Animation';
// import CubeScene from './component/Cube';
const CubeScene = React.lazy(() => import('./component/Cube'));

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
      <div
        id='top'
        style={{
          display: 'absolute',
          height: '0',
          width: '0',
        }}
      ></div>
      <main>
        <section
          aria-label='hero section'
          id='hero'
          className='hero-section adjustable-padding min-height'
          style={{
            paddingTop: '200px',
          }}
        >
          <div className='hero-container'>
            <motion.h1
              className='hero-heading'
              style={{
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.60)',
                marginBottom: '30px',
              }}
              whileHover={{ y: -30 }}
            >
              <div
                style={{
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0 auto',
                  }}
                >
                  <Suspense fallback={<div>Loading...</div>}>
                    <CubeScene cubeSize={[3, 3, 3]} />
                  </Suspense>
                  Andrew Ocegueda
                  <Suspense fallback={<div>Loading...</div>}>
                    <CubeScene cubeSize={[3, 3, 3]} />
                  </Suspense>
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
              className='hero-about-me'
              style={{
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                marginTop: '30px',
              }}
              whileHover={{ y: 20 }}
            >
              I am Andrew Ocegueda, a Senior Computer Science with Business
              Applications Student (CSBA) attending University of California,
              Riverside.
            </motion.p>
          </div>
        </section>
        <Section
          section_title='About Me'
          section_id='about-me'
          classnames='about-me adjustable-padding min-height'
          container_motion={{
            variants: container,
            initial: 'hidden',
            whileInView: 'show',
            viewport: { once: true, margin: '-50%' },
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
        </Section>
        <Section
          section_title='Education'
          section_id='education'
          classnames={'education-container'}
          container_motion={{
            variants: container,
            initial: 'hidden',
            whileInView: 'show',
            viewport: { once: true, margin: '-50%' },
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
            <h3
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
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
            <p
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Bachelor of Science in Computer Science with Business Applications
            </p>
            <img
              src={ucr}
              alt='Logo of UCR'
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                border: '2px solid white',
                margin: '10px',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
          </section>
          <section>
            <h3
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
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
            <p
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Computer Science for Transfer
            </p>
            <img
              src={mvc}
              alt='Logo of Moreno Valley College'
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                border: '2px solid white',
                margin: '10px',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
          </section>
        </Section>
        <Section
          section_title={'Projects'}
          section_id='projects'
          container_motion={{
            variants: container,
            initial: 'hidden',
            whileInView: 'show',
            viewport: { once: true, margin: '-50%' },
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
            <h3>
              Full Stack Website{' '}
              <span
                style={{
                  opacity: '0.5',
                  fontSize: '1.5rem',
                }}
              >
                Live Active
              </span>
            </h3>
            <p>
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
            <FontAwesomeIcon
              icon={faGithub}
              aria-label='react logo'
            />
          </section>
          <section>
            <h3>Dynamic Programming Algorithm</h3>
            <p>
              I created a program that utilizes dynamic programming to find the
              shortest amount of edits between two words. For example, to Change
              &quot;Goblin&quot; to &quot;Goblet&quot; it would take 2 edits.
              Replacing the i with an e and replacing n with t.
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
              Arduino IDE to run C code on the UNO 3. The major components I
              have used was the Passive Buzzer, a Shift Register and a LCD
              Screen.
            </p>
            <FontAwesomeIcon
              icon={faGithub}
              aria-label='react logo'
            />
          </section>
        </Section>
        <Section
          section_title={'Achievements'}
          section_id='achievements'
          container_motion={{
            variants: container,
            initial: 'hidden',
            whileInView: 'show',
            viewport: { once: true, margin: '-50%' },
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
          </ul>
          <ul>
            <li>Chancellor&apos;s List</li>
          </ul>
        </Section>
      </main>
      <footer
        id='footer'
        className='adjustable-padding'
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          color: 'white',
        }}
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