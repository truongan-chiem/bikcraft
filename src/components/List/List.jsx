import React from 'react'
import './List.scss'
import img1 from '../../asset/bk1.png'
import img2 from '../../asset/bk2.png'
import img3 from '../../asset/bk.png'
const List = () => {
  return (
    <div className='list'>
        <h2>your choose.</h2>
        <div className='list__group'>
            <Card img={img1} name='magic migth' money={2499} />
            <Card img={img2} name='nimbus stark' money={4909}/>
            <Card img={img3} name='nebula cosmic' money={3999}/>
        </div>
    </div>
  )
}
const Card = ({img,name,money}) =>{
    return(
        <div className='card'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>R$ {money}</p>
        </div>
    )
}

export default List