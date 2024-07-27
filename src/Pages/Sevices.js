import '../Assessts/Services.css';
import img1 from '../Images/Webdev1.jpg';
import img2 from '../Images/Webdev2.jpg';
import img3 from '../Images/Webdev3.jpg';
import img4 from '../Images/Webdev5.jpg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Services(){
    useEffect(() => {
        AOS.init({
          duration: 1200, // Animation duration (default: 400ms)
        });
      }, []);

      
    return(
        <div className="Services-container" id="services">
          <div className="header-row" data-aos="fade-right">
          <hr className="hr-style" />
          <h1 style={{color:"white"}}>What Can I Do</h1>
        </div>
           <div class="wrapper">

        <div class="Service-container-1">
            <div class="card border-top-yellow" data-aos="fade-right">
                <img src={img4} alt="" />
                <h2>Website Development</h2>
                <p>Providing custom, user-friendly and visually appealing websites for businesses and individuals.</p>
               <br></br>
                <div class="explore-btn">
                <a href="#">Explore   <i class="fa fa-arrow-right"></i></a></div>
            </div>
            <div class="card border-top-green" data-aos="fade-up">
                <img src={img2} alt=""  />
                <h2>Website Redesign</h2>
                <p>I offer Custom coded, Pixel-Perfect, Creative and Professional Websites to drive success for your business.</p>
               <br></br>
                <div class="explore-btn">
                <a href="#">Explore   <i class="fa fa-arrow-right"></i></a></div>
            </div>
            <div class="card border-top-blue" data-aos="fade-left">
                <img src={img3} alt="" />
                <h2>Clean Code</h2>
                <p>Simple PDFs into editable forms that can be easily filled and submitted digitally for improved efficiency.</p>
               <br></br>
                <div class="explore-btn">
                <a href="#">Explore   <i class="fa fa-arrow-right"></i></a></div>
            </div>
        </div>
    </div>
        </div>
    );

}
export default Services;