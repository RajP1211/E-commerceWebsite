import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import login from '../assets/login.webp';
import { loginUser } from '../redux/slices/authSlice'; 
import { useDispatch } from 'react-redux';
const Login = () => {
  const dispatch = useDispatch();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log("user login detail",{email,password});
     dispatch(loginUser({email,password}))
  }
  return (
    // <div className=' w-2/5 border-2 border-gray-500 shadow-sm flex justify-center' >
    //    <div className='p-10'>
    //        <h2 className='text-center font-medium m-5'>Rabbit</h2>
    //        <h1 className='text-2xl font-bold text-center m-5'>Hey there !</h1>
    //        <p className=' text-center m-5 font-light '>Enter your username and password to Login</p>
    //        <div className='flex flex-col  mb-5 mt-5'>
    //          <label className='font-semibold text-1xl mb-2'>Email</label>
    //          <input placeholder='Enter your email address' className='border-2 p-1 w-full ' />
    //        </div>
    //        <div className='flex flex-col mb-5 mt-5'>
    //          <label className='font-semibold text-1xl mb-2'>Password</label>
    //          <input placeholder='Enter your password' className='border-2 p-1 w-full ' />
    //        </div>
    //        <button className='bg-black text-white py-2 px-6 rounded w-full mb-4 mt-4'>
    //            Sign in
    //        </button>
    //    </div>
    // </div>

    <div className='flex'>
    <div className='w-full md:w-1/2 flex  flex-col justify-center items-center p-8 md:p-12'>
    <form onSubmit={handleSubmit} className='w-full max-w-md bg-white p-8 rounded-lg border shadow-sm'>
        <div className='flex justify-center mb-6'>
            <h2 className='text-xl font-medium'>Rabbit</h2>
        </div>
        <h2 className='text-2xl font-bold text-center mb-6'>Hey there !</h2>
        <p className='text-center mb-6'>
          Enter your username and password to login
        </p>
       <div className='mb-4'>
        <label className='block text-sm font-semibold mb-2'>Email</label>
        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full p-2 border rounded' placeholder='Enter your email address'/>
       </div>
       <div className='mb-4'>
        <label className='block text-sm font-semibold mb-2'>Password</label>
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='w-full p-2 border rounded' placeholder='Enter your password'/>
       </div>
       <button type='submit' className='w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition '>Sign in</button>
       <p className='mt-6 text-center text-sm '>
        Don't have an account ?<Link className="text-blue-500" to="/register"> Register</Link>
       </p>
    </form>
    </div>
    <div className='hidden md:block w-1/2 bg-gray-800'>
    <div className='h-full flex flex-col justify-center items-center'>
      <img src={login} alt="login imgaes" className='h-[750px] w-full object-cover'/>
    </div>
    </div>
    </div>
  )
}

export default Login
