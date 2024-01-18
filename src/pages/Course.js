import React from 'react'
import { CourseList } from '../Helpers/CourseList'
import CourseItem from '../components/CourseItem';
import '../styles/Menu.css'
import BannerImage from '../assets/white.jpg'



function Course() {
  return (
    <div className='menu' style={{ backgroundImage: `url(${BannerImage})` }}>
      <h1 className='courseTitle'>Our Course</h1>
      <div className='courseList'>
         {CourseList.map((courseItem,key)=>{
          return (
           <CourseItem
           key={key}
           image={courseItem.image}
           name={courseItem.name}
           tuition={courseItem.tuition}



          />
          

          );

         })
         
       }
      </div>

    </div>
  )
}

export default Course