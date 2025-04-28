import React from 'react';
import '../Assessts/Aboutme.css';
import img1 from '../Images/Profile5.jpg';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
    FaHtml5, 
    FaCss3Alt, 
    FaReact, 
    FaNodeJs, 
    FaDatabase,
    FaGitAlt,
    FaDocker,
    FaAws
} from 'react-icons/fa';
import { 
    SiJavascript, 
    SiTypescript, 
    SiMongodb, 
    SiExpress, 
    SiFirebase,
    SiTailwindcss,
    SiRedux,
    SiNextdotjs
} from 'react-icons/si';

const SkillBars = () => {
    const skills = [
        { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
        { name: 'React', icon: <FaReact />, color: '#61DAFB' },
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'Express', icon: <SiExpress />, color: '#000000' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' }
    ];

    return (
        <div className="skill-section" data-aos="fade-up">
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div 
                        key={skill.name} 
                        className="skill-box"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <div className="skill-icon" style={{ color: skill.color }}>
                            {skill.icon}
                        </div>
                        <span className="skill-name">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

function Aboutme() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
            offset: 100
        });

        setTimeout(() => {
            setIsVisible(true);
        }, 500);
    }, []);

    return (
        <section className="About-container" id="aboutme">
            <div className="animated-background">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
            </div>

            <div className="Profile-Image-container" data-aos="fade-right">
                <div className="image-wrapper">
                    <img src={img1} alt="Portfolio Image" />
                    <div className="image-overlay"></div>
                </div>
            </div>

            <div className="Paragrapgh-container" data-aos="fade-left">
                <div className="header-row" data-aos="fade-up">
                    <hr className="hr-style" />
                    <h1>ABOUT ME</h1>
                </div>
                <span className="subtitle" data-aos="fade-up" data-aos-delay="200">Who Am I</span>
                <p className={`text-animation ${isVisible ? 'visible' : ''}`} data-aos="fade-up" data-aos-delay="400">
                    Hello, I'm Mahad Wajid, a Software Engineer with expertise in AI/ML, particularly specializing in Generative Adversarial Networks (GANs). In addition to my work in AI/ML, I am a skilled MERN Stack Developer with over a year of experience in building dynamic, full-stack web applications. My expertise extends to creating responsive, user-friendly web solutions using HTML, CSS, JavaScript, React JS, Node JS, and MongoDB. I have also developed mobile applications. Let's work together to bring your ideas to life with cutting-edge technology and innovative design
                </p>
                <SkillBars />
            </div>
        </section>
    );
}

export default Aboutme;



