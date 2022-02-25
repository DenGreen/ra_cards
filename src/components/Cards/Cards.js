import React from "react";
import "./main.css";


function Cards(props) {
  return (
      <div className="container">
        <div className="card">
          {props.children}
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <a href="#0" className="btn btn-primary">
              {props.linkText}
            </a>
          </div>
        </div>
      </div>
  );
}

export default Cards;
