import React from 'react'

import Ranek from '../../asset/ranek'
import Caravan from '../../asset/caravan'
import Dogs from '../../asset/dogs'
import Handel from '../../asset/handel'
import Surfbot from '../../asset/surfbot'
import Wildbeast from '../../asset/wildbeast'
import Flexblog from '../../asset/flexblog'
import Lescone from '../../asset/lescone'

import './Partner.scss'
const Partner = () => {
  return (
    <div className='Partner'>
        <h2>out partners.</h2>
        <div className='Partner__group'>
            <Ranek />
            <Caravan />
            <Dogs/>
            <Handel/>
            <Surfbot />
            <Wildbeast />
            <Flexblog />
            <Lescone />
        </div>
    </div>
  )
}

export default Partner