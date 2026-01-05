import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product._id || product.id}`)}
      className="cursor-pointer"
    >
      <div className="aspect-square bg-gray-100 mb-3 overflow-hidden">
        <img
          src={`http://localhost:5000${product.images?.[0]}`}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition"
        />
      </div>

      <h3 className="text-sm font-light">{product.name}</h3>

      <p className="text-sm italic text-gray-600">
        Rs. {product.price}
      </p>
    </div>
  );
};

export default ProductCard;
