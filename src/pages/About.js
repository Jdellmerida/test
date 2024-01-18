import React from 'react';
import '../styles/About.css';
import { Link } from 'react-router-dom'
import BG from '../assets/IETIBGGGG.gif'
function About() {
  
  
  
    return (
      
      <div className="about">
      <div 
      className="aboutTop"
      style={{ backgroundImage: `url(${BG})` }} 
      ></div>
      <div className="aboutBotton">
       <h1>About us</h1>
       <p>International Electronics and Technical Institute (IETI), Inc. was established in July 1974 in Taft Ave, Pasay City. IETI Pasay offered one and two- year courses in Electronics. In 1975, IETI opened schools in Cubao and Makati. IETI Makati is still located at Guadalupe Commercial Complex (GCC) and initially offered courses in Electronics, Electricity, Radio Communications, Refrigeration, Automotive, Typing and Stenography. IETI Cubao, was located at EDSA corner New York St. offered courses in Electronics specializing in Radio and Television. In 1981, IETI Schools offered the course two-year (2-yr) Electronic Computer Technician (ECT) course earning the distinction of being the first private school in the Philippines to offer such a program. In 1984, IETI Caloocan was opened in Caloocan City, near the Bonifacio Monument and offered courses in Electronics and Radio Communications (ERC). A new two-year (2 yr) course was introduced also in 1984 in all IETI Schools, the Industrial Electronics Technician (IET).
        
       </p>
    

      </div>
      
      
      </div>
    
  )
}

export default About