import React, { useEffect, useRef, useState } from 'react'
import { CiFilter } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import FilterSiderbar from '../components/Products/FilterSiderbar';
import SortOptions from '../components/Products/SortOptions';
import ProductGrid from '../components/Products/ProductGrid';

const CollectionPage = () => {
const [ products,setproducts]=useState();
const sidebarRef= useRef(null);
const [isSidebarOpen,setIsSidebarOpen]=useState(false);
const toggleSiderbar=()=>{
    setIsSidebarOpen(!isSidebarOpen);
}
const handleClickOutside = (e)=>{
    console.log(sidebarRef.current,'sidebarRef.current');
    
    if(sidebarRef.current && !sidebarRef.current.contains(e.target)){
        setIsSidebarOpen(false)
    }
}
useEffect(()=>{
    document.addEventListener("mousedown",handleClickOutside)

    document.removeEventListener("mousedown",handleClickOutside)
})
useEffect(()=>{
    setTimeout(()=>{
     const fetchProducts=[
        {
          _id:1,
          name:"Product 1",
          price:100,
          images:[{url:"https://picsum.photos/500/500?random=1"}]
        },
        {
          _id:2,
          name:"Product 2",
          price:100,
          images:[{url:"https://picsum.photos/500/500?random=2"}]
        },
        {
          _id:3,
          name:"Product 3",
          price:100,
          images:[{url:"https://picsum.photos/500/500?random=3"}]
        },
        {
          _id:4,
          name:"Product 4",
          price:100,
          images:[{url:"https://picsum.photos/500/500?random=4"}]
        },
        {
          _id:5,
          name:"Product 5",
          price:100,
          images:[{url:"https://picsum.photos/500/500?random=5"}]
        },
        {
          _id:6,
          name:"Product 6",
          price:100,
          images:[{url:"https://picsum.photos/500/500?random=6"}]
        },
        {
          _id:7,
          name:"Product 7",
          price:100,
          images:[{url:"https://picsum.photos/500/500?random=7"}]
        },
        {
          _id:8,
          name:"Product 8",
          price:100,
          images:[{url:"https://picsum.photos/500/500?random=8"}]
        }
      ]
      setproducts(fetchProducts)
    },1000)
},[])
  return (
    <div className='flex flex-col lg:flex-row'>
        <button onClick={toggleSiderbar} className='lg:hidden border p-2 flex justify-center items-center'>
        <CiFilter className='mr-2' />
        </button>
        <div ref={sidebarRef} className={`${isSidebarOpen ? "translate-x-0":"-translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
        <FilterSiderbar />
        </div>
        <div className='flex-grow p-4 '>
            <h2 className='text-2xl uppercase mb-4'>All Collection</h2>
            {/* sort options */}
            <SortOptions/>

            {/* product Grid */}
            <ProductGrid products={products}/>
        </div>
    </div>
  )
}

export default CollectionPage
