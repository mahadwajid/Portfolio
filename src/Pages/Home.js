import '../Assessts/Home.css';
import img1 from '../Images/Profile4.png';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

function Home() {
  return (
    <section className="home-container" id='home'>
      <div className="Text-container">
        <span className="Hello">Hello</span>
        <span className="introtext">I'm
          <span className="introname"> Mahad Wajid</span>
        </span>
        <span className="subheading">Software Engineer</span>
        <p className="Intropara">
          As a Software Engineer and MERN stack developer, I specialize in building dynamic, full-stack web applications. My expertise spans from front-end design to back-end development, delivering seamless user experiences.
        </p>

        <div className="social-icons">
          <a href="https://github.com/mahadwajid" target="_blank" rel="noopener noreferrer">
            <FaGithub size={32} />
          </a>
          <a href="www.linkedin.com/in/mahadwajid" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={32} />
          </a>
          <a href="https://discord.com/invite/your-discord" target="_blank" rel="noopener noreferrer">
            <FaDiscord size={32} />
          </a>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'block', height: 0, width: 0 }}>
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
              <feBlend in="SourceGraphic" in2="goo"></feBlend>
            </filter>
          </defs>
        </svg>
      </div>

      <div className="Image-container">
        <img src={img1} alt="Portfolio Image" />
      </div>
    </section>
  );
}

export default Home;
