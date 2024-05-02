import './App.css'
import photo1 from './assets/Picture1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <> 
      <header>
        <nav>
          <ul className='nav-list'>
            <li>Home</li>
          </ul>
        </nav>
      </header>
      <main>
        <section aria-label='hero section' className='hero-section'>
          <h1 className='hero-heading'>Andrew Ocegueda</h1>
          <img src={photo1} alt="Picture of Andrew Ocegueda" className='profile-pic'/>
          <p className='hero-about-me'>I am Andrew Ocegueda, a Senior Computer Science with Business Applications Student (CSBA) attending University of California, Riverside.</p>
        </section>
        <section className='about-me' aria-label='about me'>
          <h2>About Me</h2>
          <p>I am a Senior Computer Science with Business Applications Student (CSBA) attending University of California, Riverside. I am a highly motivated individual who is passionate about technology and its applications. I am a quick learner and a team player who is always looking for ways to improve and grow. I am currently seeking a full-time position in software engineering or data science.</p>
        </section>
        <section className='education-container' aria-label='education section'>
          <h2>Education</h2>
        </section>
        <section>
          <h2>Projects</h2>
        </section>
        <section>
          <h2>Achievements</h2>
        </section>
      </main>
      <footer>
        <a href="https://github.com/xTh3Unkn0wnx">
         <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/andrew-ocegueda-715206230?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BhesREb0KRy2g6rmzHum7Tg%3D%3D">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <FontAwesomeIcon icon={faPhone} />
        <p>Phone: (999) 999-9999</p>
        <FontAwesomeIcon icon={faEnvelope} />
        <p>Email: aaaaaa@aaaaa.aaa </p>
      </footer>
    </>
  )
}

export default App
