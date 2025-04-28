import '../Assessts/Services.css';
import img1 from '../Images/Webdev1.jpg';
import img2 from '../Images/Webdev2.jpg';
import img3 from '../Images/Webdev3.jpg';
import img4 from '../Images/Webdev5.jpg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCode, FaPalette, FaMobile, FaServer, FaDatabase, FaShieldAlt } from 'react-icons/fa';

function Services() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);

    const services = [
        {
            icon: <FaCode />,
            title: "Web Development",
            description: "Custom web applications built with modern technologies and best practices.",
            image: img4
        },
        {
            icon: <FaPalette />,
            title: "UI/UX Design",
            description: "Beautiful and intuitive user interfaces that enhance user experience.",
            image: img2
        },
        {
            icon: <FaMobile />,
            title: "Responsive Design",
            description: "Websites that work flawlessly across all devices and screen sizes.",
            image: img3
        },
        {
            icon: <FaServer />,
            title: "Backend Development",
            description: "Robust server-side solutions with scalable architecture.",
            image: img1
        },
        {
            icon: <FaDatabase />,
            title: "Database Design",
            description: "Efficient database structures optimized for performance and scalability.",
            image: img2
        },
        {
            icon: <FaShieldAlt />,
            title: "Security Implementation",
            description: "Advanced security measures to protect your applications and data.",
            image: img3
        }
    ];

    return (
        <section className="services-container" id="services">
            <div className="header-row" data-aos="fade-right">
                <hr className="hr-style" />
                <h1>Services</h1>
            </div>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index} data-aos="fade-up">
                        <div className="service-icon">
                            {service.icon}
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;