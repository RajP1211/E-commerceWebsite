import React, { useEffect, useState } from 'react'

const MyOrdersPage = () => {
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
           setTimeout(()=>{
            const mockOrders=[
                {
                    _id:"12345",
                    createdAt:new Date(),
                    shippingAddress:{city:"new York",country:"USA"},
                    orderItem:[
                        {
                            name:'Product1',
                            image:"https://picsum.photos/500/500?random=1"
                        }
                    ],
                    totalPrice:100,
                    isPaid:true
                },
                {
                    _id:"123456",
                    createdAt:new Date(),
                    shippingAddress:{city:"new York",country:"USA"},
                    orderItem:[
                        {
                            name:'Product2',
                            image:"https://picsum.photos/500/500?random=2"
                        }
                    ],
                    totalPrice:100,
                    isPaid:true
                }
            ]
            setOrders(mockOrders);

           },1000)
    },[])
  return (
    <div className='max-w-7xl mx-auto p-4 sm:p-6'>
    <h2 className='text-xl sm:text-2xl font-bold mb-6'>My orders</h2>
    <div className='relative shadow-md sm:rounded-lg overflow-hidden'>
    <table className='min-w-full text-left textgray-500 '>
        <thead className='bg-gray-100 text-xs uppercase text-gray-700'>
            <tr>
                <th className='py-2 px-4 sm:py-3'>Image</th>
                <th className='py-2 px-4 sm:py-3'>Order ID</th>
                <th className='py-2 px-4 sm:py-3'>Created</th>
                <th className='py-2 px-4 sm:py-3'>Shipping Address</th>
                <th className='py-2 px-4 sm:py-3'>Items</th>
                <th className='py-2 px-4 sm:py-3'>Price</th>
                <th className='py-2 px-4 sm:py-3'>Status</th>
            </tr>
        </thead>
        <tbody>
            {orders.length >0 ?(
                orders.map((orders)=>(
                    <tr key={orders.id} className='border-b hover:border-gray-50 cursor-pointer'>
                        <td className='py-2 px-2 sm:py-4 sm:px-4'>
                        <img src={orders.orderItem[0].image} alt={orders.orderItem[0].name} className='w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg'/>
                        </td>
                        <td className='py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap'>
                        #{orders._id}
                        </td>
                        <td className='py-2 px-2 sm:py-4 sm:px-4'>
                        {new Date(orders.createdAt).toLocaleDateString()}{" "}
                        {new Date(orders.createdAt).toLocaleTimeString()}
                        </td>
                        <td className='py-2 px-2 sm:py-4 sm:px-4'> 
                        {orders.shippingAddress ?`${orders.shippingAddress.city}, ${orders.shippingAddress.country}`:'N/A'}
                        </td>
                        <td className='py-2 px-2 sm:py-4 sm:px-4'>
                        {orders.orderItem.length}
                        </td>
                        <td className='py-2 px-2 sm:py-4 sm:px-4'>
                        ${orders.totalPrice}
                        </td>
                        <td className='py-2 px-2 sm:py-4 sm:px-4'>
                         <span className={`${orders.isPaid ? "bg-green-100 text-green-700":"bg-red-100 text-red-700"} px-2 py-1 rounded-full text-xs sm:text-sm font-medium` }>{orders.isPaid ? "Paid":"pending"}</span>
                        </td>
                    </tr>
                ))
            ):(
                <tr>
                 <td colSpan={7} className='py-4 px-4 text-center text-gray-500'>
                    You have no orders
                 </td>
                </tr>
            )}
        </tbody>
    </table>
    </div>
    </div>
  )
}

export default MyOrdersPage
