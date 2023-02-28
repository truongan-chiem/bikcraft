import React from 'react'
import Advanced from '../../components/Advanced/Advanced'
import Banner from '../../components/Banner/Banner'
import Depoimento from '../../components/Depoimento/Depoimento'
import List from '../../components/List/List'
import Partner from '../../components/Partner/Partner'
import Safety from '../../components/Safety/Safety'

const Home = () => {
  return (
    <div>
      <Banner />
      <List />
      <Advanced/>
      <Partner />
      <Depoimento />
      <Safety />
    </div>
  )
}

export default Home