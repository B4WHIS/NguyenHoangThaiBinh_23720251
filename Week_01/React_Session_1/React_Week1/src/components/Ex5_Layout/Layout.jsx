import "./Layout.css";

function Layout() {
  // Tạo mảng giả 6 sản phẩm
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <h3>Danh sách sản phẩm (Co giãn cửa sổ để test)</h3>
      <div className="product-grid">
        {items.map((item) => (
          <div key={item} className="grid-item">
            <h4>Sản phẩm {item}</h4>
            <p>Mô tả ngắn gọn...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Layout;
