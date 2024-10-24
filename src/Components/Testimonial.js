import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png"
import { AiFillStar } from 'react-icons/ai'

const Testimonial = () => {
  return (
    <div classNAme="work-section-wrapper">
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonial</p>
            <h1 classNAme='primary-heading'>What neww</h1>
            <p className='primary-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, tenetur perspiciatis. Accusantium vero laudantium officiis nulla, ab doloremque non repellat?
            </p>
        </div>
        <div className='testimonial-section-bottom'>
            <img src={ProfilePic} alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias soluta quae rem, omnis numquam eaque quisquam beatae? Eaque, dicta vel.</p>

            <div className='testmonials-stars-container'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h2>John Doe</h2>
        </div>
    </div>
  )
}

export default Testimonial