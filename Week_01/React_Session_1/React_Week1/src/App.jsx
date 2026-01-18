import "./App.css";
import ProductCard from "./components/Ex1_ProductCard/ProductCard";
import Button from "./components/Ex2_Button/Button";
import Alert from "./components/Ex3_Alert/Alert";
import Login from "./components/Ex4_Login/Login";
import Layout from "./components/Ex5_Layout/Layout";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Bài Tập React Tuần 1</h1>
      <hr />

      <h2>Bài 1: Product Card</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <ProductCard />
        <ProductCard />
      </div>

      <hr />

      <h2>Bài 2: Button Component</h2>
      <Button type="primary" label="Primary Button" />
      <Button type="success" label="Success Button" />
      <Button type="danger" label="Danger Button" />

      <hr />

      <h2>Bài 3: Alert Notification</h2>
      <Alert />

      <hr />

      <h2>Bài 4: Login Form</h2>
      <Login />

      <hr />

      <h2>Bài 5: Responsive Layout</h2>
      <Layout />
    </div>
  );
}

export default App;
