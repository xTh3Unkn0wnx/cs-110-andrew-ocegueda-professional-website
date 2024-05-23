import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer
      id='footer'
      className='adjustable-padding footer-adjustable'
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
        <FontAwesomeIcon icon={faEnvelope} /> Email: aaaaaa@aaaaa.aaa
      </p>
    </footer>
  );
}

export default Footer;
