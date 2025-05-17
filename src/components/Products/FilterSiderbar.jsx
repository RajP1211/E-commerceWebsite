import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router';

const FilterSiderbar = () => {
    const [searchParams,setSearchParams]=useSearchParams('');
    const [filter,setFilter]=useState({
        category:"",
        gender:"",
        color:"",
        size:[],
        material:[],
        brand:[],
        minPrice:0,
        maxProce:100
    })
    const [priceRange,setPriceRange]=useState();
    const categories =["Top Wear","Bottom Wear"];
    const colors=[
        "red","Blue","Black","Green","Yellow","Gray","White","Pink","Beige","Navy"
    ]
    const sizes=["XS","S","M","L","XL","XXL"]
    const materials=[
        "Cotton",
        "Wool",
        "Denim",
        "Polyester",
        'Silk',
        "Linen",
        "Viscose",
        "Fleece"
    ]
    const brands=["Urban", "Modern Fit"]
    const genders=["Men","Women"];
    useEffect(()=>{
      const params=Object.fromEntries([...searchParams]);
    //    {categeory :'Top Wear',MaxPrice:100}=> params.category
    setFilter({
        category:params.category || "",
        gender:params.gender || "",
        color:params.color || "",
        size:params.size ? params.size.split(','):[],
        material:params.material ? params.material.split(','):[],
        brand:params.brand ? params.brand.split(','):[],
        minPrice:params.minPrice || 0,
        maxPrice:params.maxPrice || 100,
    })
    setPriceRange([0,params.maxPrice ||100 ])
    },[searchParams]);
 const handleFilterChange=(e)=>{
    const {name,value,checked,type}=e.target;
    console.log({name,value,checked,type})

 }
  return (
    <div className='p-4 '>
        <h3 className='text-xl font-medium text-gray-800 mb-4'>Filter</h3>
        <div className='mb-6'>
        <label className='block text-gray-600 font-medium mb-2'>Category</label>
            {categories.map((category)=>(
                <div key={category} className=' flex items-center mb-1'>
                    <input 
                     type='radio'
                     name='category'
                     value={category}
                     onChange={handleFilterChange}
                     className='mr-2 h-4 w-4 text-blue-500  focus:ring-blue-400 border-gray-300'
                    />
                    <span className='text-gray-700'>{category}Hiiii</span>
                </div>
            ))}
        </div>
      {/* gender category */}
      <div className='mb-6'>
        <label className='block text-gray-600 font-medium mb-2'>Gender</label>
            {genders.map((gender)=>(
                <div key={gender} className=' flex items-center mb-1'>
                    <input 
                     type='radio'
                     name='gender'
                     value={gender}
                     onChange={handleFilterChange}
                     className='mr-2 h-4 w-4 text-blue-500  focus:ring-blue-400 border-gray-300'
                    />
                    <span className='text-gray-700'>{gender}</span>
                </div>
            ))}
        </div>

        {/* color Filter*/}
        <div className='mb-6'>
           <label className='block text-gray-600 font-medium'>Color</label>
           <div className='flex flex-wrap gap-2'>
             {colors.map((color)=>(
                <button key={color}  value={color} onChange={handleFilterChange} name='color' className='w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105'
                style={{backgroundColor:color.toLowerCase()}}></button>
             ))}
           </div>
        </div>
        {/* material */}
        <div className='mb-6'>
        <label className='block text-gray-600 font-medium mb-2'>Material</label>
        {materials.map((material)=>(
          <div key={material} className='flex items-center mb-1'>
            <input type='checkbox' name='material' value={material} className='mr-2 h4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300' />
            <span className='text-gray-700'>{material}</span>
          </div>
        ))}
        </div>
        {/* size filter */}
        <div className='mb-6'>
        <label className='block text-gray-600 font-medium mb-2'>Size</label>
        {sizes.map((size)=>(
          <div key={size} className='flex items-center mb-1'>
            <input type='checkbox' name='size' value={size} onChange={handleFilterChange} className='mr-2 h4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300' />
            <span className='text-gray-700'>{size}</span>
          </div>
        ))}
        </div>

        {/* brand */}
        <div className='mb-6'>
        <label className='block text-gray-600 font-medium mb-2'>Brand</label>
        {brands.map((brand)=>(
          <div key={brand}  className='flex items-center mb-1'>
            <input type='checkbox' name='brand' value={brand} onChange={handleFilterChange} className='mr-2 h4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300' />
            <span className='text-gray-700'>{brand}</span>
          </div>
        ))}
        </div>
        {/* price */}
        <div className='mb-8'>
        <label className='block text-gray-800 font-medium mb-2'>
            Price Range
        </label>
        <input type='range' name='priceRange' value={priceRange} onChange={handleFilterChange}min={0} max={100} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" />
        <div className='flex justify-between textgray-600 mt-2'>
            <span>$0</span>
            <span>${1}</span>
        </div>
        </div>
    </div>
  )
}

export default FilterSiderbar
