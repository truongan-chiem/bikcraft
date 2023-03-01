import React from 'react'
import './Banner.scss'
import logo from '../../asset/banner.png'

const Banner = () => {
  return (
    <div className='banner'>
       <div className='banner__container'>
          <div className='banner__content'>
              <h1>Custom made bikes.</h1>
              <p>Electric bicycles of high precision and quality, tailor-made for the customer. Explore the world at your own speed with Bikcraft.</p>
              <button className='banner__content__button'>
                  Your Select
              </button>
          </div>
          <div className='banner__img' data-aos='fade-in'>
            <img src={logo} alt="" />
          </div>
       </div >
    </div>
  )
}

export default Banner