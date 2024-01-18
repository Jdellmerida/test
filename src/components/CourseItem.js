import React from 'react'

function CourseItem({image, name, tuition}) {
return (
    <div className='menuItem'>
         <div style={{backgroundImage: `url(${image}`}}></div>
         <h1>{name}</h1>
         <p>₱{tuition}</p>

    </div>
)

}

export default CourseItem