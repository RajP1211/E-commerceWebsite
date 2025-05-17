import React, { useState } from 'react'
import { HiSearch } from 'react-icons/hi';
import { HiX } from 'react-icons/hi';

const SearchBar = () =>{
    const [searchTerm ,setSearchTerm]=useState("");
    const [isOpen,setIsOpen]=useState(false);
    const handleSearchToggle =()=>{
      setIsOpen(!isOpen)
    }
    const handleSearch =(e)=>{
      e.preventDefault();
      console.log("Serach term",searchTerm);
      setIsOpen(false);
      
    }
  return (
    <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50":"w-auto"}`}>
      {isOpen ? (<form onSubmit={handleSearch} className=' flex items-center justify-center w-full'>
        <div className='relative w-1/2 '>
           <input type="text" placeholder='Search' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}  className='bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700'/>
           <button type='submit' className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800'>
        <HiSearch className='h-6  w-6' />
        </button>
        </div>
        <button type='button'
        onClick={handleSearchToggle} className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800'>
          <HiX className='h-6 w-6'/>
        </button>
      </form>):
      (<button onClick={handleSearchToggle}>
        <HiSearch className='h-6  w-6' />
        </button>)}
    </div>
  )
}

export default SearchBar
