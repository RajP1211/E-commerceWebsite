import React from 'react';
import { Link} from "react-router-dom"
import heroImg from '../../assets/rabbit-hero.webp';
import kingImg from '../../assets/king.jpg'
const Hero = () => {
  return (
   <section className='relative'>
    <img src={heroImg} alt="Hero image" className='w-full h-[400px] md:h-[600px] lg:h-[750px] object-fill' />
    <div className='absolute inset-0  flex items-center justify-center'>
      <div className='text-center text-white p-6'>
        <h1 className='text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4'>Vacation<br/>Ready</h1>
        <p className='text-sm tracking-tighter md:textlg mb-6'>Explore our vacation-ready outfits with fast worldwide shipping</p>
        <Link to="#" className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg">Shop Now
        </Link>
      </div>
    </div>
   </section>
//   <section className="relative">
//   <img
//     src={kingImg} // Regal Crown Image
//     alt="Regal Crown"
//     className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
//   />
//   <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//     <div className="text-center text-white p-4">
//       <h1 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-3 text-shadow-lg">Jotiraj Patil</h1>
//       <p className="text-lg md:text-2xl font-semibold">The Kingdom Awaits</p>
//     </div>
//   </div>
// </section>

  )
}

export default Hero
