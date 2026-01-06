import { useParams, useNavigate } from "react-router-dom";
import { useState ,useEffect} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import lelobhatan from "../assets/lelobhatan.jpg";
import lelo from "../assets/jhodpuri.jpg";
import { fetchProductById } from "../services/productApi";


const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
const [product, setProduct] = useState(null);

const BACKEND_URL="https://freedomtreedinning-backend.onrender.com"

useEffect(() => {
  const loadProduct = async () => {
    try {
      const data = await fetchProductById(id);
      setProduct(data);
    } catch (err) {
      console.error(err);
    }
  };
  loadProduct();
}, [id]);


  const [activeImage, setActiveImage] = useState(null);

useEffect(() => {
  if (product?.images?.length>0) {
    setActiveImage(`${BACKEND_URL}${product.images[0]}`);
  }
}, [product]);
  


  const [quantity, setQuantity] = useState(1);
  const [openDetails, setOpenDetails] = useState(true);

  if (!product) return <div className="p-10">Product not found</div>;

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-6 text-sm">
        <span className="text-green-600 cursor-pointer">Home</span> /{" "}
        <span className="text-green-600 cursor-pointer">
          Dining & Entertaining
        </span>{" "}
        / <span>{product.name}</span>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Images */}
        <div className="flex gap-6 h-[652px]">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4 gap-y-[19px]">
            {product.images.map((img) => (
              <img
                key={img}
                src={`${BACKEND_URL}${img}`}
                alt={product.name}
                onClick={() => setActiveImage(`${BACKEND_URL}${img}`)}
                className={`w-[76px] h-[115px] object-cover cursor-pointer border ${
                  activeImage === img ? "border-black" : "border-transparent"
                }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 bg-gray-100">
            <img
              src={activeImage}
              alt={product.name}
              className="w-[540px] h-[651px] object-cover"
            />
          </div>
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-light mb-3">{product.name}</h1>
          <p className="text-xl mb-6">Rs. {product.price}</p>

          {/* Size */}
          <div className="mb-6">
            <p className="text-xs tracking-widest mb-2">SIZE</p>
            <div className="border px-4 py-3 inline-block">
              {product.size}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <p className="text-xs tracking-widest mb-2">QUANTITY</p>
            <div className="flex items-center border w-max">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2"
              >
                −
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2"
              >
                +
              </button>
            </div>
          </div>

          {/* Gift */}
          <label className="flex items-center gap-2 mb-6">
            <input type="checkbox" />
            <span className="text-sm">Is this a gift to someone?</span>
          </label>

          {/* Buttons */}
          <div className="flex gap-4 mb-8">
            <button className="flex-1 bg-black text-white py-4">
              ADD TO CART
            </button>
            <button className="flex-1 bg-green-600 text-white py-4">
              BUY IT NOW
            </button>
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Icons */}
          <div className="grid grid-cols-2 gap-6 text-sm mb-8">
            <div>Designed & Made in India</div>
            <div>Handmade with Love</div>
            <div>Responsible Design</div>
            <div>Dishwasher & Microwave Safe</div>
          </div>

          {/* Explore */}
          <div className="text-sm mb-8">
            <p>
              Category:{" "}
              <span className="text-green-600">
                {product.category}
              </span>
            </p>
            
            <p>
              Category: <span className="text-green-600">{product.category}</span>
            </p>

          </div>

          {/* Details Accordion */}
          <div className="border-t pt-4">
            <button
              onClick={() => setOpenDetails(!openDetails)}
              className="flex justify-between w-full font-semibold"
            >
              Details
              <span>{openDetails ? "−" : "+"}</span>
            </button>

            {openDetails && (
              <ul className="mt-4 space-y-2 text-sm">
                <li>Material: {product.material}</li>
                <li>Color: {product.color}</li>
                <li>Size: {product.size}</li>

              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="text-center my-16">
        <button
          onClick={() => navigate(-1)}
          className="bg-black text-white px-10 py-3"
        >
          ← BACK TO DINING & ENTERTAINING
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default ProductPage;
