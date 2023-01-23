import React, { useState } from "react";
import certificados from "./certificados";

const Certificados = () => {
  const [style, setStyle] = useState("cont");
  
  const changeStyle = () => {
      setStyle("cont2");
  };
  return (
    <>
      <div className={style}>
        <button className="btn" onClick={changeStyle}>
          Click me!
        </button>
      </div>
    </>
  );
};

export default Certificados;