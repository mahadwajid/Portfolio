import React from 'react';
import '../Assessts/Aboutme.css';
import img1 from '../Images/Profile5.jpg';

function StarRating({ level }) {
    const filledStars = Math.floor(level);
    const emptyStars = 5 - filledStars;
  
    const stars = [];
  
    // Add filled stars
    for (let i = 0; i < filledStars; i++) {
      stars.push(
        <span key={i} className="star filled">
          ★
        </span>
      );
    }
  
    // Add half-filled star if needed
    if (level % 1 !== 0) {
      stars.push(
        <span key={filledStars} className="star half-filled">
          ★
        </span>
      );
    }
  
    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={filledStars + i + 1} className="star empty">
          ★
        </span>
      );
    }
  
    return <div className="stars">{stars}</div>;
  }
  
  const SkillBars = () => {
    const skills = [
      { name: 'HTML', level: 3 },
      { name: 'CSS', level: 3 },
      { name: 'ReactJS', level: 4 },
      { name: 'React Native', level: 3 },
      { name: 'Nodejs', level: 4 },
      { name: 'ExpressJS', level: 4 },
      { name: 'MongoDB', level: 4 },
      { name: 'Firebase', level: 4 },
    ];
  
    return (
      <div className="skill-section">
        {/* <h2 style={{color:"white"}}>Skills</h2> */}
        <div className="skills-container">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-box">
              <span className="skill-name">{skill.name}</span>
              <StarRating level={skill.level} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
function Aboutme() {
  return (
    <section className="About-container" id="aboutme">
      <div className="Profile-Image-container">
        <img src={img1} alt="Portfolio Image" />
      </div>

      <div className="Paragrapgh-container">
        <div className="header-row">
          <hr className="hr-style" />
          <h1>ABOUT ME</h1>
        </div>
        <span>Who Am I</span>
        <p>
          Hello, I'm Mahad Wajid, a skilled MERN Stack Developer with over 1 year of expertise. I specialize in website development, creating responsive designs, and building customized web solutions using HTML, CSS, JavaScript, React JS, Node JS, and MongoDB. Let's collaborate to bring your web projects to life with seamless functionality and design.
        </p>
        <SkillBars />
      </div>
    </section>
  );
}

export default Aboutme;


// import { useEffect, useState } from 'react';
// import '../Assessts/Aboutme.css';
// import img1 from '../Images/Profile5.jpg';

// function Aboutme() {
//     const [showSkills, setShowSkills] = useState(false);

//     useEffect(() => {
//         setShowSkills(true);
//     }, []);

//     return (
//         <section className="About-container">
//             <div className="Profile-Image-container">
//                 <img src={img1} alt="Portfolio Image" />
//             </div>

//             <div className="Paragrapgh-container">
//                 <div className="header-row">
//                     <hr className="hr-style" />
//                     <h1>ABOUT ME</h1>
//                 </div>
//                 <span>Who Am I</span>
//                 <p>
//                     Hello, I'm Mahad Wajid, a skilled MERN Stack Developer with over 1 year of expertise. I specialize in website development, creating responsive designs, and building customized web solutions using HTML, CSS, JavaScript, React JS, Node JS, and MongoDB. Let's collaborate to bring your web projects to life with seamless functionality and design.
//                 </p>

//                 <div className={`Skill-container ${showSkills ? 'show' : ''}`}>
//                     <h2 style={{color:"white" , fontWeight:"bold"}}>Skills</h2>
//                     <div className="Skill-bar">
//                         <div className="Skill" style={{ width: '80%' }}>
//                             HTML - 80%
//                         </div>
//                     </div>
//                     <div className="Skill-bar">
//                         <div className="Skill" style={{ width: '75%' }}>
//                             CSS - 75%
//                         </div>
//                     </div>
//                     <div className="Skill-bar">
//                         <div className="Skill" style={{ width: '80%' }}>
//                             JavaScript - 80%
//                         </div>
//                     </div>
//                     <div className="Skill-bar">
//                         <div className="Skill" style={{ width: '85%' }}>
//                             Reactjs - 85%
//                         </div>
//                     </div>

//                     <div className="Skill-bar">
//                         <div className="Skill" style={{ width: '80%' }}>
//                             Nodejs - 80%
//                         </div>
//                     </div>

//                     <div className="Skill-bar">
//                         <div className="Skill" style={{ width: '83%' }}>
//                             MongoDB - 83%
//                         </div>
//                     </div>
                    
                    
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Aboutme;

