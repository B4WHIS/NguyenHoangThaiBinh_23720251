import "./ProductCard.css";

function ProductCard() {
  return (
    <div className="product-card">
      <img
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        alt="Giày Nike"
        className="product-img"
      />
      <h3>Nike Air Max</h3>
      <p style={{ color: "red", fontWeight: "bold" }}>$120.00</p>
      <button className="btn-add">Add to cart</button>
    </div>
  );
}

export default ProductCard;
