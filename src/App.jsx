import { useState } from "react";
import "./App.css";
import logo from "./image-qr-code.png";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="contenedor">
      <img src={logo} alt="" />
      <b className="titulo">Improve your front-end skills by building projects</b>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default App;
