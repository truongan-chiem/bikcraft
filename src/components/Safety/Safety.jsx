import React from 'react'
import './Safety.scss'
import Check from '../../asset/check'
const Safety = () => {
  return (
    <div className='safety'>
        <div className="safety__container">
            <h2 className='safety__title'>safety</h2>
            <div className='safety__group'>
                <Box title={"sliver"} money="199" type={'sliver'}>
                    <ul className='card-box__list'>
                        <li><Check/> Two exchanges per year</li>
                        <li><Check/> Technical assistance</li>
                        <li><Check/> Support 08:00 to 18:00</li>
                        <li><Check/> State coverage</li>
                    </ul>
                </Box>
                <Box title={"gold"} money="299"  type={'gold'}>
                    <ul className='card-box__list'>
                        <li><Check/> Five exchanges per year</li>
                        <li><Check/> Special assistance</li>
                        <li><Check/> Support 24h</li>
                        <li><Check/> National coverage</li>
                        <li><Check/> Partner discounts</li>
                        <li><Check/> Access to the Bikecraft Club</li>
                    </ul>
                </Box>
            </div>
        </div>
    </div>
  )
}
const Box = ({children,title,money,type}) =>{
    return(
        <div className='card-box'>
            <div className='card-box__header'>
                <h2 style={type === 'gold' ? {color: "#FFBB00"} : {color: "#9C9C9C"}}>{title}</h2>
                <h3>${money}</h3>
            </div>
            {children}
            <button className={`card-box__button ${type === 'gold' ? 'button-gold' : ''}`}>
                Sign Up
            </button>
        </div>
    )
}


export default Safety