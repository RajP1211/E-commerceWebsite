import React, { useEffect, useState } from "react";
import {toast} from "sonner"
import ProductGrid from "./ProductGrid";
const selectedproduct = {
  index: 1,
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description: "This is a stylish jacket perfect for any occasion",
  brand: "FashionBrand",
  material: "leather",
  Sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Black"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Stylish Jacket 1",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Stylish Jacket 2",
    },
    {
      url: "https://picsum.photos/500/500?random=3",
      altText: "Stylish Jacket 3",
    },
  ],
};
const similarProducts=[
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
  }
]
const ProductDetails = () => {
  const [mainImages, setMainImages] = useState("");
  const [selectedSize ,setSelectedSize]=useState("");
  const [selectedColor,setSelectedColor]=useState("");
  const [quantity,setQuantity]=useState(1);
  const [isButtonDisabled,setIsButtonDisabled]=useState(false);
  useEffect(() => {
    if (selectedproduct.images?.length > 0) {
      setMainImages(selectedproduct.images[0].url);
    }
  }, [selectedproduct]);
  const handleQuantityChange =(value)=>{
     if(value === "min"){
        if(quantity >1)
        setQuantity(quantity-1);
     }else if (value === "max"){
     setQuantity(quantity+1)
     }
  }

  const handleAddToCart =()=>{
    if(!selectedSize || !selectedColor){
      toast.error("Please select a size and color brand",{
        duration:1000
      });
      return;
    }
    setIsButtonDisabled(true);
    setTimeout(()=>{
      toast.success("product addd to cart !",{
        duration:1000
      });
      setIsButtonDisabled(false)
    },500)
  }
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* left thumbnails */}
          <div className=" hidden md:flex flex-col space-y-4 mr-6">
            {selectedproduct?.images?.map((image, index) => (
              <img
                onClick={() => setMainImages(image.url)}
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                  mainImages === image.url ? "border-black" : "border-gray-300"
                }`}
              />
            ))}
          </div>
          {/* main */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImages}
                alt='"Mian Product'
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          {/* mobile thumbnail */}
          <div className="md:hidden flex overflow-x-scroll space-x-4 mb-4">
            {selectedproduct?.images?.map((image, index) => (
              <img
                onClick={() => setMainImages(image.url)}
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                  mainImages === image.url ? "border-black" : "border-gray-800"
                }`}
              />
            ))}
          </div>
          {/* right section */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedproduct?.name}
            </h1>
            <p className="text-lg textgray-600 mb-1 line-through">
              {selectedproduct?.originalPrice &&
                `${selectedproduct?.originalPrice}`}
            </p>
            <p className="text-xl text-gray-500 mb-2">
              ₹{selectedproduct.price}
            </p>
            <p className="text-gray-600  mb-4">
              {selectedproduct?.description}
            </p>
            <div className="mb-4">
              <p className="text-gray-700">Colors :</p>
              <div className="flex gap-2 mt-2">
                {selectedproduct?.colors?.map((color,index) => (
                  <button
                  onClick={()=>setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${selectedColor ===color ? "border-black":"border-gray-300"}`}
                    key={color}
                    style={{
                      backgroundColor: color.toLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700">Size</p>
              <div className="flex gap-2 mt-2">
                {selectedproduct?.Sizes?.map((size) => (
                  <button onClick={()=>setSelectedSize(size)} key={size} className={`px-4 py-2 rounded border ${selectedSize ===size ?"bg-black text-white": "bg-white text-black"}`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 ">Quantity :</p>
              <div className="flex items-center space-x-4 mt-2">
                <button onClick={()=>handleQuantityChange("min")} className="px-2 py-1 bg-gray-200 rounded text-lg">
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button onClick={()=>handleQuantityChange("max")} className="px-2 py-1 bg-gray-200 rounded text-lg">
                  +
                </button>
              </div>
            </div>
             <button disabled={isButtonDisabled} onClick={handleAddToCart} className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${isButtonDisabled ? "cursor-not-allowed opacity-50": "hover:bg-gray-900"}`}>
             {isButtonDisabled ?"Adding...":" ADD TO CART"}
            </button>
            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4"> Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectedproduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectedproduct?.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-20">
         <h2 className="text-2xl text-center font-medium mb-4">You May Also Like</h2>
         <ProductGrid products={similarProducts}/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
