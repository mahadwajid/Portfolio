import '../Assessts/Home.css';
import img1 from '../Images/Profile4.png';
import { FaGithub, FaLinkedin, FaDiscord, FaFileAlt } from 'react-icons/fa';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration (default: 400ms)
    });
  }, []);

  const handleViewCV = () => {
    // Open CV in a new tab
    window.open('/Mahad Wajid CV.pdf.pdf', '_blank');
  };

  return (
    <section className="home-container" id='home'>
      <div className="Text-container">
        <span className="Hello" data-aos="fade-right">Hello</span>
        <span className="introtext" data-aos="fade-right">I'm
          <span className="introname" data-aos="fade-right"> Mahad Wajid</span>
        </span>
        <span className="subheading" data-aos="fade-right">Software Engineer</span>
        <p className="Intropara" data-aos="fade-right">
          As a Software Engineer and MERN stack developer, I specialize in building dynamic, full-stack web applications. My expertise spans from front-end design to back-end development, delivering seamless user experiences.
        </p>

      

        <div className="social-icons" data-aos="fade-right">
          <a href="https://github.com/mahadwajid" target="_blank" rel="noopener noreferrer">
            <FaGithub size={32} />
          </a>
          <a href="https://www.linkedin.com/in/mahadwajid/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={32} />
          </a>
          <a href="https://discord.com/invite/your-discord" target="_blank" rel="noopener noreferrer">
            <FaDiscord size={32} />
          </a>
        </div>

        <div className="button-container" data-aos="fade-right">
          <button className="view-cv-btn" onClick={handleViewCV}>
            <FaFileAlt /> View CV
          </button>
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

      <div className="Image-container" data-aos="fade-up">
        <img src={img1} alt="Portfolio Image" />
      </div>
    </section>
  );
}

export default Home;
