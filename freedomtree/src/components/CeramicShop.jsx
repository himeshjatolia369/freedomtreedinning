import { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";
import { ChevronDown, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../services/productApi";
import ShopByCategory from "./ShopByCategory";
import ProductCard from "./ProductCard";


import "../App.css"
import "../index.css"

const CeramicShop = () => {
  const navigate = useNavigate();
  const [sortOption, setSortOption] = useState("");
  const [shopCategory, setShopCategory] = useState("");


  const scrollRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const MIN_PRICE = 0;
  const MAX_PRICE = 6000;

  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 6000,
  });

  const [saleFilters, setSaleFilters] = useState([]);




  /* -------------------- FILTER TOGGLES -------------------- */
  const [openFilters, setOpenFilters] = useState({
    category: true,
    color: false,
    size: false,
    material: false,
    sale: false,
  });

  const toggleFilter = (filter) => {
    setOpenFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  /* -------------------- SELECTED FILTER STATE -------------------- */
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    color: [],
    size: [],
    material: [],
  });

  const toggleCheckboxFilter = (type, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value],
    }));
  };

  /* -------------------- FILTER DATA -------------------- */
  const categoryFilters = [
    ["Bar Accessories", 41],
    ["Cake and Bakeware", 21],
    ["Dinnerware", 89],
    ["Drinkware & Mugs", 74],
    ["Flatware & Accessories", 52],
    ["Serveware", 63],
    ["Table Accents", 6],
    ["Table Linens", 92],
  ];

  const saleOptions = [
    { label: "30% OFF", value: 30 },
    { label: "50% OFF", value: 50 },
    { label: "SPECIAL PRICE", value: "special" },
  ];


  const colors = [
    ["Aqua", "#6ee7f5"],
    ["Blue", "#0000ff"],
    ["Lime", "#7CFC00"],
    ["Mint", "#98FB98"],
    ["Green", "#2e7d32"],
    ["Black", "#000000"],
    ["White", "#ffffff"],
    ["Neutral", "#bdbdbd"],
    ["Grey", "#808080"],
    ["Metallic", "linear-gradient(135deg,#b08d57,#ffd700,#8c6b3f)"],
  ];


  const sizeFilters = [
    ["Medium", 10],
    ["Large", 10],
    ["13 CM", 1],
    ["19 CM", 2],
    ["15 DIA CM", 2],
    ["10 CM X 10 CM", 2],
    ["10 CM X 5 CM", 2],
    ["10 DIA X 10 H CM", 1],
    ["10 DIA X 13 H CM", 1],
    ["10 DIA X 15 H CM", 1],
    ["10 DIA X 5 H CM", 2],
  ];

  const materialFilters = [
    ["Ceramic", 256],
    ["Cotton Blend", 1],
    ["Enamel", 2],
    ["Glass", 19],
    ["Jute", 1],
    ["Mango Wood", 2],
    ["Metal", 19],
    ["Polyester", 2],
    ["Pure Cotton", 90],
  ];

  {/* PRICE */ }
  <div className="border-t py-4">
    <span className="text-sm tracking-widest font-semibold block mb-4">
      PRICE
    </span>

    <input
      type="range"
      min="0"
      max="10000"
      step="100"
      value={priceRange[1]}
      onChange={(e) =>
        setPriceRange([0, Number(e.target.value)])
      }
      className="w-full"
    />

    <div className="flex justify-between text-sm mt-2">
      <span>₹ {priceRange[0]}</span>
      <span>₹ {priceRange[1]}</span>
    </div>
  </div>

  {/* SALE */ }
  <div className="border-t py-4">
    <button
      onClick={() => toggleFilter("sale")}
      className="flex w-full justify-between items-center mb-4"
    >
      <span className="text-sm tracking-widest font-semibold">
        SALE
      </span>
      <ChevronDown
        className={`w-4 h-4 transition-transform ${openFilters.sale ? "rotate-180" : ""
          }`}
      />
    </button>

    {openFilters.sale && (
      <div className="space-y-3">
        {saleOptions.map(({ label, value }) => (
          <label
            key={label}
            className="flex items-center gap-3 text-sm cursor-pointer"
          >
            <input
              type="checkbox"
              checked={saleFilters.includes(value)}
              onChange={() =>
                setSaleFilters((prev) =>
                  prev.includes(value)
                    ? prev.filter((v) => v !== value)
                    : [...prev, value]
                )
              }
            />
            {label}
          </label>
        ))}
      </div>
    )}
  </div>


  /* -------------------- PRODUCT DATA -------------------- */
  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      console.log("API PRODUCTS:", data); // 👈 ADD THIS
      setProducts(data);
      setLoading(false);
    };
    loadProducts();
  }, []);


  /* -------------------- FILTER LOGIC -------------------- */
  const filteredProducts = products.filter((product) => {
    if (
      selectedFilters.category.length &&
      !selectedFilters.category.includes(product.category)
    ) {
      return false;
    }

    if (
      selectedFilters.color.length &&
      !selectedFilters.color.includes(product.color)
    ) {
      return false;
    }

    if (
      selectedFilters.size.length &&
      !selectedFilters.size.includes(product.size)
    ) return false;

    if (
      selectedFilters.material.length &&
      !selectedFilters.material.includes(product.material)
    ) return false;

    if (shopCategory && product.shopByCategory !== shopCategory) {
      return false;
    }

    //price filter
    if (
      product.price < priceRange.min ||
      product.price > priceRange.max
    ) {
      return false;
    }

    // ✅ SALE FILTER
    if (saleFilters.length) {
      if (
        saleFilters.includes("special") &&
        !product.specialPrice
      ) return false;

      const saleOnly = saleFilters.filter((v) => v !== "special");
      if (
        saleOnly.length &&
        !saleOnly.includes(product.sale)
      ) return false;
    }

    return true;
  });

  //sorted product with filter
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "low-high") {
      return a.price - b.price;
    }
    if (sortOption === "high-low") {
      return b.price - a.price;
    }
    return 0;
  });


  /* -------------------- JSX -------------------- */
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="flex">
        {/* ==================== SIDEBAR ==================== */}
        <aside className="w-80 bg-white sticky top-[160px] h-[calc(100vh-160px)] flex flex-col">
          {/* Static Header */}
          <div className="px-6 pt-8 pb-4 shrink-0">
            <div className="flex items-center gap-2 text-sm mb-6">
              <span className="text-green-600 cursor-pointer">Home</span>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">Dining & Entertaining</span>
            </div>
            <h2 className="text-xs tracking-widest text-gray-500">FILTERS</h2>
          </div>

          {/* Scrollable Filters */}
          <div className="flex-1 border-r overflow-y-auto px-6 filter-scroll">
            {/* CATEGORY */}
            <div className="border-t pt-4">
              <button
                onClick={() => toggleFilter("category")}
                className="flex w-full justify-between items-center mb-4"
              >
                <span className="text-sm tracking-widest font-semibold">
                  CATEGORY
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${openFilters.category ? "rotate-180" : ""
                    }`}
                />
              </button>

              {openFilters.category && (
                <div className="space-y-3">
                  {categoryFilters.map(([label, count]) => (
                    <label
                      key={label}
                      className="flex items-center gap-3 text-sm cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFilters.category.includes(label)}
                        onChange={() =>
                          toggleCheckboxFilter("category", label)
                        }
                      />
                      {label} ({count})
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* COLOR */}
            <div className="border-t py-4">
              <button
                onClick={() => toggleFilter("color")}
                className="flex w-full justify-between items-center mb-4"
              >
                <span className="text-sm tracking-widest font-semibold">
                  COLOR
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${openFilters.color ? "rotate-180" : ""
                    }`}
                />
              </button>

              {openFilters.color && (
                <div className="space-y-3">
                  {colors.map(([label, color]) => (
                    <button
                      key={label}
                      onClick={() => toggleCheckboxFilter("color", label)}
                      className="flex items-center gap-3 text-xs tracking-widest"
                    >
                      <span
                        className={`w-5 h-5 rounded-full border-2 ${selectedFilters.color.includes(label)
                          ? "border-black"
                          : label === "White"
                            ? "border-gray-400"
                            : "border-transparent"
                          }`}
                        style={{ background: color }}
                      />
                      {label.toUpperCase()}
                    </button>
                  ))}
                </div>
              )}
            </div>


            {/* SIZE */}
            <div className="border-t py-4">
              <button
                onClick={() => toggleFilter("size")}
                className="flex w-full justify-between items-center mb-4"
              >
                <span className="text-sm tracking-widest font-semibold">
                  SIZE
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${openFilters.size ? "rotate-180" : ""
                    }`}
                />
              </button>

              {openFilters.size && (
                <div className="space-y-3">
                  {sizeFilters.map(([label, count]) => (
                    <label
                      key={label}
                      className="flex items-center gap-3 text-sm cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFilters.size.includes(label)}
                        onChange={() => toggleCheckboxFilter("size", label)}
                      />
                      {label.toUpperCase()} ({count})
                    </label>
                  ))}
                </div>
              )}
            </div>


 

            {/* MATERIAL */}
            <div className="border-t py-4">
              <button
                onClick={() => toggleFilter("material")}
                className="flex w-full justify-between items-center mb-4"
              >
                <span className="text-sm tracking-widest font-semibold">
                  MATERIAL
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${openFilters.material ? "rotate-180" : ""
                    }`}
                />
              </button>

              {openFilters.material && (
                <div className="space-y-3">
                  {materialFilters.map(([label, count]) => (
                    <label
                      key={label}
                      className="flex items-center gap-3 text-sm cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFilters.material.includes(label)}
                        onChange={() =>
                          toggleCheckboxFilter("material", label)
                        }
                      />
                      {label.toUpperCase()} ({count})
                    </label>
                  ))}
                </div>
              )}
            </div>


            {/* PRICE */}
            {/* PRICE FILTER */}
            {/* PRICE */}
            <div className="border-t py-4">
              <button
                onClick={() => toggleFilter("price")}
                className="flex w-full justify-between items-center mb-4"
              >
                <span className="text-sm tracking-widest font-semibold">PRICE</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${openFilters.price ? "rotate-180" : ""
                    }`}
                />
              </button>

              {openFilters.price && (
                <div className="mt-4">
                  {/* Slider */}
                  <div className="relative h-6">
                    {/* Base track */}
                    <div className="absolute top-1/2 w-full h-[3px] bg-gray-300 rounded" />

                    {/* Active track */}
                    <div
                      className="absolute top-1/2 h-[3px] bg-black rounded"
                      style={{
                        left: `${(priceRange.min / MAX_PRICE) * 100}%`,
                        width: `${((priceRange.max - priceRange.min) / MAX_PRICE) * 100
                          }%`,
                      }}
                    />

                    {/* Min thumb */}
                    <input
                      type="range"
                      min={MIN_PRICE}
                      max={MAX_PRICE}
                      value={priceRange.min}
                      onChange={(e) =>
                        setPriceRange((prev) => ({
                          ...prev,
                          min: Math.min(+e.target.value, prev.max - 100),
                        }))
                      }
                      className="price-thumb absolute w-full"
                    />

                    {/* Max thumb */}
                    <input
                      type="range"
                      min={MIN_PRICE}
                      max={MAX_PRICE}
                      value={priceRange.max}
                      onChange={(e) =>
                        setPriceRange((prev) => ({
                          ...prev,
                          max: Math.max(+e.target.value, prev.min + 100),
                        }))
                      }
                      className="price-thumb absolute w-full"
                    />
                  </div>

                  {/* Price inputs */}
                  <div className="flex justify-between mt-4 gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      ₹
                      <input
                        type="number"
                        value={priceRange.min}
                        onChange={(e) =>
                          setPriceRange((p) => ({ ...p, min: +e.target.value }))
                        }
                        className="border px-2 py-1 w-24"
                      />
                    </div>

                    <div className="flex items-center gap-1">
                      ₹
                      <input
                        type="number"
                        value={priceRange.max}
                        onChange={(e) =>
                          setPriceRange((p) => ({ ...p, max: +e.target.value }))
                        }
                        className="border px-2 py-1 w-24"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>






            {/* SALE */}
            <div className="border-t py-4">
              <button
                onClick={() => toggleFilter("sale")}
                className="flex w-full justify-between items-center mb-4"
              >
                <span className="text-sm tracking-widest font-semibold">
                  SALE
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${openFilters.sale ? "rotate-180" : ""
                    }`}
                />
              </button>

              {openFilters.sale && (
                <div className="space-y-3">
                  {saleOptions.map(({ label, value }) => (
                    <label
                      key={label}
                      className="flex items-center gap-3 text-sm cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={saleFilters.includes(value)}
                        onChange={() =>
                          setSaleFilters((prev) =>
                            prev.includes(value)
                              ? prev.filter((v) => v !== value)
                              : [...prev, value]
                          )
                        }
                      />
                      {label}
                    </label>
                  ))}
                </div>
              )}
            </div>






          </div>
        </aside>

        {/* ==================== MAIN CONTENT ==================== */}
        <main className="flex-1 p-6">
          {/* ======= COLLECTION HEADER ======= */}
          <div className="max-w-4xl mb-10">
            <h1 className="text-3xl font-semibold mb-4">
              Contemporary ceramic dinner sets online
            </h1>

            <p className="text-sm text-gray-700 leading-relaxed">
              Handmade in India and handpainted to perfection, shop our unique
              collection of ceramic{" "}
              <span className="text-green-600">dinner sets</span> with complementary{" "}
              <span className="text-green-600">barware</span>,{" "}
              <span className="text-green-600">drinkware</span> and{" "}
              <span className="text-green-600">table linen</span>. Or, stick to the
              basics with our solid glazed{" "}
              <span className="text-green-600">dinnerware</span> &{" "}
              <span className="text-green-600">serveware</span>. Complete the dining
              room set with our curated range.
            </p>

            <button className="text-sm mt-3 italic underline">
              Read More &gt;&gt;
            </button>
          </div>

          {/* ======= SHOP BY CATEGORY ======= */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Shop By Category</h2>

            <div className="flex gap-4 overflow-x-auto pb-2">
              {[
                "Dinner Sets",
                "Plates and Platters",
                "Bowls",
                "Coffee Mugs",
                "Table linen",
                "Drinkware",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    setShopCategory((prev) => (prev === item ? "" : item))
                  }

                  className="px-8 py-3
                  min-h-[48px]
                 border border-black
                 text-[16px]
                 font-medium
                 tracking-wide
                 leading-none
                bg-white text-black
                 hover:bg-black hover:text-white
                 transition
                  focus:outline-none focus:ring-0"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-light">
              {filteredProducts.length} Products
            </h3>
            <select
              className="px-4 py-2 border"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">Sort</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
                <ProductCard
                key={product._id || product.id}
                product={product}
                />
            ))}
          </div>
        </main>
      </div>

      {/* Chat Button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
        <MessageCircle className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default CeramicShop;
