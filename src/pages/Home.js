import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/IETIBGGGG.gif'
import '../styles/Home.css'



function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer' >
       <h1>IETI Marikina</h1>
       <p>            Part the technical vocational school in the philippines</p>
       <Link to ="/course">
        <button>Enroll Now</button>
       </Link>
      </div>

      <div>
  
      </div>

      
     
    </div>
 
    

  )
}

export default Home