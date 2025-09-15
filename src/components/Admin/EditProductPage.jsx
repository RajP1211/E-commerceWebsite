import React, { useState } from 'react'

const EditProductPage = () => {
    const [productsData,setProductData]=useState({
        name:"",
        description:"",
        price:0,
        countInStock:'',
        sku:"",
        category:'',
        brand:'',
        sizes:[],
        colors:[],
        collections:"",
        material:'',
        gender:'',
        images:[
            {
                url:"https://picsum.photos/150?random=1",
            },
            {
                url:"https://picsum.photos/150?random=2",
            },

        ]

    });
    const handleOnchange =(e)=>{
     const {name,value} =e.target;
     setProductData((prevData)=>({...prevData,[name]:value}));
    }
    const handleImageUpload = async(e)=>{
    const file = e.target.files[0];
    console.log(file)
    }
    const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(productsData)
    }
  return (
    <div className='max-w-5xl mx-auto p-6 shadow-md rounded-md'>
     <h2 className='text-3xl font-boldmb-6'>Edit Product</h2>
     <form onSubmit={handleSubmit}>
        <div className='mb-6'>
             <label className='block font-semibold mb-2'>Product Name</label>
        <input type='text'
         name="name" 
         value={productsData?.name}
         onChange={handleOnchange}
         className='w-full border border-gray-300 rounded-md p-2'
         required
         />
        </div>
       {/* description */}
       <div className='mb-6'>
        <label className='block font-semibold mb-2'>Description</label>
        <textarea type='text' name='description' value={productsData?.description} onChange={handleOnchange}
         className='w-full border-gray-300 rounded-md p-2'
         rows={4}
         required
         />
       </div>

       {/* price*/}
        <div className='mb-6'>
             <label className='block font-semibold mb-2'>Price</label>
        <input type='number'
         name="price" 
         value={productsData?.price}
         onChange={handleOnchange}
         className='w-full border border-gray-300 rounded-md p-2'
         required
         />
        </div>

        {/* count in stock */}
        <div className='mb-6'>
        <label className='block font-semibold mb-2'>Count I</label>
        <input type='number'
         name="countInStock" 
         value={productsData?.countInStock}
         onChange={handleOnchange}
         className='w-full border border-gray-300 rounded-md p-2'
         required
         />
        </div>
{/* SKU */}
         <div className='mb-6'>
        <label className='block font-semibold mb-2'>SKU</label>
        <input 
        type='text'
         name="sku" 
         value={productsData?.sku}
         onChange={handleOnchange}
         className='w-full border border-gray-300 rounded-md p-2'
         required
         />
        </div>
        {/* size */}
        <div className='mb-6'>
        <label className='block font-semibold mb-2'>Sizes (comma-separated)</label>
        <input 
        type='text'
         name="sizes" 
         value={productsData?.sizes.join(',')}
         onChange={(e)=>{
            setProductData({
                ...productsData,
                sizes:e.target.value.split(",").map((size)=>size.trim()),
            })
         }}
         className='w-full border border-gray-300 rounded-md p-2'
         required
         />
        </div>

        {/*colors  */}
         <div className='mb-6'>
        <label className='block font-semibold mb-2'>Colors (comma-separated)</label>
        <input 
        type='text'
         name="colors" 
         value={productsData?.colors.join(',')}
         onChange={(e)=>{
            setProductData({
                ...productsData,
                colors:e.target.value.split(",").map((colors)=>colors.trim()),
            })
         }}
         className='w-full border border-gray-300 rounded-md p-2'
         required
         />
        </div>
        {/* images */}
        <div className='mb-6'>
         <label className='block font-semibold mb-2'>Upload Image</label>
         <input type='file' onChange={handleImageUpload} />
         <div className='flex gap-4 mt-4'>
            {productsData?.images.map((image,index)=>(
                <div key={index}>
                    <img className='w-20 h-20 object-cover rounded-md' src={image.url} alt={image.alttext || "Product"}/>
                </div>
            ))}
         </div>
        </div>

        <button type='submit' className='w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors'>Update Product</button>
    </form>    
    </div>
  )
}

export default EditProductPage
