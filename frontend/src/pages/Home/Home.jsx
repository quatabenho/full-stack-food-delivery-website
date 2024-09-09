import React from 'react'
import './Home.css'
import { useState } from 'react'
import Header from '../../components/Hearder/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'

const Home = () => {

  const [category, setCategory] = useState('All')


  return (
    <div>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  )
}

export default Home