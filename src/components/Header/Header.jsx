import React, { useEffect, useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import './Header.scss'
const Header = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleMobile = () =>{
      if(window.innerWidth < 768){
        setIsMobile(true)
      }
      else{
        setIsMobile(false)
      }
    }
    handleMobile();
    window.addEventListener("resize",handleMobile)
    return () =>{
    window.removeEventListener("resize",handleMobile)

    }
  }, [])
  

  return (
    <nav className='header'>
       <div className='header___bg'>
          <h2 className="header__logo">
              bikcraft
          </h2>
          {isMobile ? <>
            <AiOutlineMenu style={{fontSize:"2rem",cursor:'pointer'}} />
          </>
          :
          <ul className="header__nav">
              <li>Bicycles</li>
              <li>Insurance</li>
              <li>Contact</li>
          </ul>
          }
       </div >
    </nav>
  )
}

export default Header