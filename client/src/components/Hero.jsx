import React from 'react'
import { useSelector } from 'react-redux';

const Hero = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <div className="container-fluid bg-dark text-white d-flex justify-content-center align-items-center flex-column " style={{height:"50vh"}}>
        <h1 style={{fontSize:"50px"}}>News Aggregator</h1>
        
        {!isLoggedIn &&  <><p style={{fontSize:"30px"}}>Please Login and select any category you wish to see which are trending in india</p></>
 }
  {isLoggedIn &&  <p style={{fontSize:"30px"}}>select any category you wish to see which are trending in india</p>
 }
 <p style={{fontSize:"20px"}}>below ones are all type of articles which are now trending in india </p>
    </div>
  )
}

export default Hero