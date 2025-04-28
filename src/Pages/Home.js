import '../Assessts/Home.css';
import img1 from '../Images/Profile4.png';
import { FaGithub, FaLinkedin, FaDiscord, FaFileAlt, FaArrowRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100
    });
    
    // Trigger visibility animation after component mounts
    setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Handle window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleViewCV = () => {
    // Open CV in a new tab
    window.open('/Mahad Wajid CV.pdf.pdf', '_blank');
  };

  return (
    <section className="home-container" id='home'>
      <div className="animated-background">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
      
      <div className="Text-container">
        <div className={`text-animation ${isVisible ? 'visible' : ''}`}>
          <span className="Hello" data-aos="fade-right">Hello</span>
          <span className="introtext" data-aos="fade-right" data-aos-delay="200">I'm
            <span className="introname" data-aos="fade-right" data-aos-delay="400"> Mahad Wajid</span>
          </span>
          <span className="subheading" data-aos="fade-right" data-aos-delay="600">Software Engineer</span>
        </div>
        
        <p className="Intropara" data-aos="fade-right" data-aos-delay="800">
          As a Software Engineer, I specialize in AI/ML, particularly in Generative Adversarial Networks (GANs). In addition to my AI/ML expertise, I am also a skilled MERN stack developer with experience in building dynamic, full-stack web applications. I have worked on numerous projects and developed mobile applications, leveraging my skills to create seamless, efficient solutions across multiple platforms
        </p>

        <div className="social-icons" data-aos="fade-right" data-aos-delay="1000">
          <a href="https://github.com/mahadwajid" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub size={windowWidth <= 480 ? 24 : 32} />
          </a>
          <a href="https://www.linkedin.com/in/mahadwajid/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin size={windowWidth <= 480 ? 24 : 32} />
          </a>
          <a href="https://discord.com/invite/your-discord" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaDiscord size={windowWidth <= 480 ? 24 : 32} />
          </a>
        </div>

        <div className="button-container" data-aos="fade-right" data-aos-delay="1200">
          <button className="view-cv-btn" onClick={handleViewCV}>
            <FaFileAlt /> View CV <FaArrowRight className="arrow-icon" />
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

      <div className="Image-container" data-aos="fade-up" data-aos-delay="400">
        <div className="image-wrapper">
          <img src={img1} alt="Portfolio Image" />
          <div className="image-overlay"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
