import '../Assessts/Contactus.css';
import React from 'react';
import { FaMapMarker, FaPhone, FaEnvelope, FaGithub, FaCodepen, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Contactus = () => {


    return (
        <section id="contact">
            <h1 className="section-header">Contact</h1>

            <div className="contact-wrapper">
                {/* Left contact page */}
                <form
                    id="contact-form"
                    className="form-horizontal"
                    role="form"
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
                        rows="10"
                        placeholder="MESSAGE"
                        name="message"
                        required
                    ></textarea>

                    <button id='Contact-button' >
                        Send
                    </button>
                </form>

                {/* Right contact page */}
                <div className="direct-contact-container">
                    <ul className="contact-list">
                        <li className="list-item">
                            <FaMapMarker size={32} />
                            <span className="contact-text place">Mardan, Pakistan</span>
                        </li>

                        <li className="list-item">
                            <FaPhone size={32} />
                            <span className="contact-text phone">
                                <a href="tel:+923426954890" title="Give me a call">
                                    +923426954890
                                </a>
                            </span>
                        </li>

                        <li className="list-item">
                            <FaEnvelope size={32} />
                            <span className="contact-text gmail">
                                <a href="mailto:mahadwajid613@gmail.com" title="Send me an email">
                                    mahadwajid613@gmail.com
                                </a>
                            </span>
                        </li>
                    </ul>

                    <hr />
                    <ul className="social-media-list">
                        <li>
                            <a href="https://github.com/mahadwajid" target="_blank" rel="noopener noreferrer" className="contact-icon">
                        
                                <FaGithub size={32}  />
                              
                            </a>
                        </li>


                        <li>
                            <a href="www.linkedin.com/in/mahadwajid" target="_blank" className="contact-icon">
                                <FaLinkedin size={32} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/mahad_wajid" target="_blank" className="contact-icon">
                                <FaInstagram size={32} />
                            </a>
                        </li>
                    </ul>
                    <hr />

                    <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
                </div>

            </div>
        </section>
    );
};

export default Contactus;
