import '../Assessts/Contactus.css';
import React, { useEffect } from 'react';
import { FaMapMarker, FaPhone, FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contactus = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    return (
        <section id="contact" className="contact-section">
            <h1 className="section-header" data-aos="fade-down">Contact</h1>
            <div className="contact-wrapper">
                {/* Left Side: Text, Info, Socials */}
                <div className="contact-info-side" data-aos="fade-right">
                    <div className="contact-why">
                        <h2>Why Contact Me?</h2>
                        <p>
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Whether you want to collaborate, need a developer for your next big thing, or just want to say hi—let's connect!<br /><br />
                            I bring expertise in AI/ML, full-stack web development, and a passion for building impactful digital solutions. Let's create something amazing together.
                        </p>
                    </div>
                    <ul className="contact-list">
                        <li className="list-item">
                            <FaMapMarker size={28} />
                            <span className="contact-text place">Mardan, Pakistan</span>
                        </li>
                        <li className="list-item">
                            <FaPhone size={28} />
                            <span className="contact-text phone">
                                <a href="tel:+923426954890" title="Give me a call">
                                    +923426954890
                                </a>
                            </span>
                        </li>
                        <li className="list-item">
                            <FaEnvelope size={28} />
                            <span className="contact-text gmail">
                                <a href="mailto:mahadwajid613@gmail.com" title="Send me an email">
                                    mahadwajid613@gmail.com
                                </a>
                            </span>
                        </li>
                    </ul>
                    <ul className="social-media-list">
                        <li>
                            <a href="https://github.com/mahadwajid" target="_blank" rel="noopener noreferrer" className="contact-icon">
                                <FaGithub size={24} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/mahadwajid" target="_blank" rel="noopener noreferrer" className="contact-icon">
                                <FaLinkedin size={24} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/mahad_wajid" target="_blank" rel="noopener noreferrer" className="contact-icon">
                                <FaInstagram size={24} />
                            </a>
                        </li>
                    </ul>
                    <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
                </div>
                {/* Right Side: Form */}
                <form
                    id="contact-form"
                    className="form-horizontal contact-form-side"
                    role="form"
                    data-aos="fade-left"
                >
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="NAME"
                                name="name"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="EMAIL"
                                name="email"
                                required
                            />
                        </div>
                    </div>
                    <textarea
                        className="form-control"
                        rows="8"
                        placeholder="MESSAGE"
                        name="message"
                        required
                    ></textarea>
                    <button id="Contact-button" type="submit">
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contactus;
