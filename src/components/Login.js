import React, { useState } from 'react'
import Header from './Header';
import netflixBackgroundImage from '../utils/netflix background image.png'
const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
  const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm);
  }

  return ( 
    <div>
    <Header/>
    <div className='absolute'>
    <img src={netflixBackgroundImage}/>
    </div>
    <form className='p-12 absolute bg-black w-1/4 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
    <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
    {!isSignInForm && <input type="text" placeholder="Full Name" className='p-2 my-4 w-full bg-gray-700'/>}
    <input type="text" placeholder="Email Address" className='p-2 my-4 w-full bg-gray-700'/>
   
    <input type="password" placeholder="Password" className='p-2 my-4 w-full bg-gray-700'/>
    <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm?"Sign In":"Sign Up"} </button>
    <p className='py-4  cursor-pointer'onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up":"Already have an account? Sign In"}</p>
    </form>
   
    </div>
  )
}

export default Login;