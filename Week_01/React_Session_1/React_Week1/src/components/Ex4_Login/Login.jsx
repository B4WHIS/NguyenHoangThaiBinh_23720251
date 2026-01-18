import "./Login.css";

function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-form">
        <h2 style={{ textAlign: "center" }}>Đăng Nhập</h2>

        <div className="form-group">
          <label>Username</label>
          <input type="text" className="form-input" placeholder="Nhập tên..." />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-input"
            placeholder="Nhập mật khẩu..."
          />
        </div>

        <button className="btn-login">Login</button>
      </div>
    </div>
  );
}

export default Login;
