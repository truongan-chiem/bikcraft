import React from 'react'
import './Advanced.scss'
import img from '../../asset/advan.png'
import Bike from '../../asset/bike'
import Tracker from '../../asset/tracker'
const Advanced  = () => {
  return (
    <div className='Advanced'>
      <div className="Advanced__container">
          <div className='Advanced__left'>
              <h4 className='Advanced__left__sub'>Advanced technology</h4>
              <h2 className='Advanced__left__title'>You choose your colors and components.</h2>
              <p className='Advanced__left__content'>Each Bikcraft is unique and has its own identity. The measurements will be exact for your body and height, ensuring greater comfort and ergonomics in your pedaling. You can also completely customize its colors.</p>
              <div className='Advanced__left__link'>CHOOSE A MODEL</div>
              <div className='Advanced__left__more'>
                  <Box icon={<Bike />} title='Electric Motor' content={'Every Bikcraft is equipped with an electric motor that lasts up to 120 hours. The battery is recharged with your energy expended when pedaling.'}/>
                  <Box icon={<Tracker />} title='Tracker' content={"We know how precious your Bikcraft is, so we've added tracking and anti-theft systems to ensure your peace of mind."}/>
              </div>
          </div>
          <div className='Advanced__img'>
            <img  src={img} alt="" />
          </div>
      </div>
    </div>
  )
}

const Box = ({icon,title,content}) =>{
  return(
    <div className='box'>
      {icon}
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}

export default Advanced 