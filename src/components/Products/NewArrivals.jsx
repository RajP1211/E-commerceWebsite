import React, { useEffect, useReducer, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router";
const NewArrivals = () => {
  const newArrivals = [
    {
      id: "1",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      id: "2",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      id: "3",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      id: "4",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      id: "5",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      id: "6",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      id: "7",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      id: "8",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=8",
          altText: "Stylish Jacket",
        },
      ],
    },
  ];
  const scrollRef=useRef(null);
  const [isDragging,setIsDragging]=useState(false);
  const [startX,setStartX]=useState(0);
  const [scrollLeft,setScrollLeft]=useState(false);
  const [canScrollRight,setCanScrollRight]=useState(false);
  const [canScrollLeft,setCanScrollLeft]=useState(false);
  const scroll =(direction)=>{
    const scrollAmount = direction ==="left" ?  -300 : 300;
    scrollRef.current.scrollBy({left:scrollAmount,behaviour:"smooth"})
}

const updateScrollButtons = () => {
  const container = scrollRef.current;
  if (container) {
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    console.log(scrollRef.current.offsetLeft);
    
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1); 
  }
};

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
  
    const handleScroll = () => updateScrollButtons();
  
    container.addEventListener("scroll", handleScroll);
    updateScrollButtons();
  
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
 const handleMouseDown=(e)=>{
setIsDragging(true);
setStartX(e.pageX-scrollRef.current.offsetLeft);
setScrollLeft(scrollLeft.current.scrollLeft);
 }
 const handleMouseMove =(e)=>{
  if(!isDragging) return;
  const x =e.pagesX -scrollRef.current.offsetLeft;
  const walk = x-startX;
  scrollRef.current.scrollLeft = scrollLeft - walk;
 }
 const handleMouseUpOrLeave =()=>{

 }
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4"> Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8 ">
          {" "}
          Discover the latest styles straight off the runway freshly added to
          keep your wardrobe on the cutting edge of fashion
        </p>

        <div className="absolute right-0 bottom-[-40px] flex space-x-2 top-15 ">
          <button onClick={()=>scroll("left")} 
           disabled={!canScrollLeft}
          className={`p-2 rounded border ${canScrollLeft ? ' bg-white text-black':"bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
            <FiChevronLeft className="text-2xl" />
          </button>
          <button onClick={()=>scroll("right")}
           disabled={!canScrollRight}
           className={`p-2 rounded border ${canScrollRight ? ' bg-white text-black':"bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      <div
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
       className={`container mx-auto overflow-x-scroll flex space-x-6 top-10 relative ${isDragging ? "cursor-grabbing":"cursor-grab"}`}>
        {newArrivals?.map((product) => (
          <div key={product.id} className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative">
            <img className="w-full h-[500px] object-cover rounded-2xl"
            draggable="false"
              src={product.images[0].url}
              alt={product.images[0]?.altText || product.name}
            />
            <div  className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg"
            >

            <Link to={`/product/${product._id}`} className="block">
            <h4 className="font-medium">{product.name}</h4>
            <p className="mt-2">${product.price}</p></Link>
            </div>
          </div>
        ))}
        {/* {newArrivals?.map((product) => (
          <div key={product.id} className="min-w-[200px]">
            <img
              src={product.images[0].url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-auto object-cover rounded-lg"
            />
            <h3 className="mt-2 font-semibold">{product.name}</h3>
            <p className="text-gray-500">${product.price}</p>
          </div>
        ))} */}
      </div>
    </section>
  );
};

export default NewArrivals;
