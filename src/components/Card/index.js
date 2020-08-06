import React from "react";
import "./styles.css";
const Card = ({ name = "", img = "" ,birthday="",status='',handleClick}) => {



  return (
    <>
      <div className="card" onClick={handleClick}>
        <div className="card-container">
          <div className="card-adelante">
              <img src={img} alt="imagen" />
          </div>
          <div className="card-atras">
            <span>{name}</span>
            <span>Fecha de cumpleaños : {birthday}</span>
           <span>{status}</span>
            </div>

         
        </div>
      </div>
    </>
  );
};

export default Card;
