import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const img1 = product.images?.[0];
  const img2 = product.images?.[1] || img1;

  return (
    <div className="group cursor-pointer">
      
      {/* IMAGE AREA */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden mb-3">

        {/* DEFAULT IMAGE */}
        <img
          src={`https://freedomtreedinning-backend.onrender.com${img1}`}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />

        {/* HOVER IMAGE */}
        <img
          src={`https://freedomtreedinning-backend.onrender.com${img2}`}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* HOVER ACTIONS */}
        <div className="absolute inset-0 flex items-end justify-around gap-3 
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300">

          {/* VIEW BUTTON */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${product._id || product.id}`);
            }}
            className="bg-white text-black text-sm px-4 py-2 hover:bg-green-500 hover:text-white transition"
          >
           Quick VIEW
          </button>

          {/* ADD TO CART */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log("Add to cart", product);
            }}
            className="bg-black text-white text-sm px-4 py-2 hover:bg-white hover:text-black border border-black transition"
          >
            ADD TO CART
          </button>
        </div>
      </div>

      {/* PRODUCT INFO */}
      <h3
        onClick={() => navigate(`/product/${product._id || product.id}`)}
        className="text-sm font-light"
      >
        {product.name}
      </h3>

      <p className="text-sm italic text-gray-600">
        Rs. {product.price}
      </p>
    </div>
  );
};

export default ProductCard;
