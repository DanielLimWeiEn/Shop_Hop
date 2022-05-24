import React from 'react'
import Categories from '../components/Categories'
import Slider from '../components/Slider'
import Newsletter from '../components/Newsletter'
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';




const Home = () => {
  return (
    <div>
      
       <Slider/>
       <Categories/>
       <Newsletter/>
    </div>
  )
}

export default Home
