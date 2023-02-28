import React from 'react'
import './Depoimento.scss'
import img from '../../asset/depoimento.png'
import Left from '../../asset/ngoactrai'
import Right from '../../asset/ngoacphai'
const Depoimento = () => {
  return (
    <div className='depoimento'>
        <img src={img} alt="" />
        <div className='depoimento__content'>
            <h2 className="depoimento__content__title">
            <Left />
            Cycling has always been my passion, what the people at Bikcraft have done is intensify my love for this activity. I recommend it to everyone I love.
            <Right />
            </h2>
            <p className='depoimento__content__author'>Ana Julia</p>
        </div>
    </div>
  )
}

export default Depoimento