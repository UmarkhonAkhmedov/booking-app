import React from 'react'
import Featured from '../../components/featured/Featured'
import FeaturedProperty from '../../components/featuredProperty/FeaturedProperty'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertyList/PropertyList'
import "./home.css"

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='homeContainer'>
        <Featured />
        <h1 className='homeTitle'>Browse by property type</h1>
        <PropertyList />
        <h1>Home guests love</h1>
        <FeaturedProperty />
      </div>
    </div>
  )
}

export default Home