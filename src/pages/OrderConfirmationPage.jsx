import React from 'react';

const checkout={
    _id:'12323',
    createdAt :new Date(),
    checkoutItem:[
     { productId:'1',
      name:"jacket",
      color:'black',
      size:'M',
      price:'150',
      quantity:1,
      image:"https://picsum.photos/150?random=1"
     },
      { productId:'2',
      name:"T-shirt",
      color:'black',
      size:'M',
      price:'120',
      quantity:1,
      image:"https://picsum.photos/150?random=2"
     }

    ],
    shippingAddress:{
      address:"123 fashion street",
      city:'New york',
      country:"USA"
    }

}
const calculateEstimatedDevlivery =(createdAt)=>{
      const orderDate= new Date (createdAt);
      orderDate.setDate(orderDate.getDate() + 10)  //add 10 days  to order date
       return orderDate.toLocaleDateString();
    }
const OrderConfirmationPage = () => {
  return (
    <div className='max-w-4xl mx-auto p-6 bg-white'>
      <h1 className='text-4xl font-bold text-center text-emerald-700 mb -8'>
        Thank you for your Order !
      </h1>
      {
        checkout && (
          <div className='p-6 rounded-lg border'>
            <div className='flex justify-between mb-20'>
                {/* order is and date */}
                <div>
                  <h2 className='text-xl font-semibold'>
                    order ID :{checkout?._id}
                  </h2>
                  <p className='text-gray-500'>
                    Order Date :{new Date(checkout?.createdAt).toLocaleDateString()}
                  </p>
                </div>
                {/* estimated Delivery */}
                <div>
                  <p className='text-gray-700 text-sm'>
                    Estimated Delivery :
                    {calculateEstimatedDevlivery(checkout?.createdAt)}
                  </p>
                </div>
            </div>
            {/* order Item */}
            <div className='mb-20'>
             {checkout?.checkoutItem?.map((item)=>{
              return(
              
              <div key={item?.productId} className='flex items-center mb-4'>
                <img src={item?.image} alt={item?.name} className='w-16 h-16 object-cover rounded-md mr-4' />
                <div>
                  <h4 className='text-md font-semibold'>{item?.name}</h4>
                  <p className='text-sm text-gray-500'>{item?.color}| {item?.size}</p>
                </div>
                <div className='ml-auto text-right'>
                  <p className='text-md'>₹{item?.price}</p>
                  <p className='text-sm text-gray-500'>QTY: {item?.quantity}</p>
                </div>
              </div>
             )})}
            </div>
            {/* payment and delivery info */}
            <div  className='grid grid-cols-2 gap-8'>  
              <div>
                <h4 className='text-lg font-semibold mb-2 '>Payment</h4>
                <p className='text-gray-500'>Paypal</p>
              </div>
              {/*delivery info  */}
              <div>
                <h4 className='text-lg font-semibold mb-2'>Delivery</h4>
                <p className='text-gray-600'>{checkout?.shippingAddress?.address}</p>
                <p className='text-gray-600'>{checkout.shippingAddress?.city}, {""} {checkout?.shippingAddress?.country}</p>

              </div>
            </div>
          </div>   
        )
      }
    </div>
  )
}

export default OrderConfirmationPage
  