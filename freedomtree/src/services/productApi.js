export const fetchProducts = async () => {
  const res = await fetch("http://localhost:5000/api/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export const fetchProductById = async (id) => {
  const res = await fetch(`http://localhost:5000/api/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
};
