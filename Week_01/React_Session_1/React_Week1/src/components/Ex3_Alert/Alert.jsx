import { useState } from "react";
import "./Alert.css";

function Alert() {
  const [alertType, setAlertType] = useState(null);

  return (
    <div>
      {}
      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => setAlertType("success")}>Show Success</button>
        <button onClick={() => setAlertType("warning")}>Show Warning</button>
        <button onClick={() => setAlertType("error")}>Show Error</button>
      </div>

      {}
      {alertType && (
        <div className={`alert-box alert-${alertType}`}>
          <span>
            Thông báo: <strong>{alertType.toUpperCase()}</strong>
          </span>
          {}
          <button className="close-btn" onClick={() => setAlertType(null)}>
            X
          </button>
        </div>
      )}
    </div>
  );
}

export default Alert;
