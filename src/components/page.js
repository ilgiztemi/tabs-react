import React, { useEffect, useState } from "react";
import { data } from "./data";


const Page = () => {
  const [newItem, setNewItem] = useState([]);


  useEffect(() => {
    setNewItem(data[0])
  }, [])

  const handleClick = (index) => {
    let findItem = data.find((el) => el.id === index);
    setNewItem(findItem);
    // console.log(newItem);
  };
  return (
    <div className="container">
      <div className="top">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, cum.
        </p>
      </div>
      <div className="main">
        <div>
          <img
            className="img"
            src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg"
            alt="nature"
          />
        </div>
        <div className="main-content">
          <div className="navbar">
            <h4 onClick={() => handleClick(0)} className="history">
              History
            </h4>
            <h4 onClick={() => handleClick(1)} className="vision">
              Vision
            </h4>
            <h4 onClick={() => handleClick(2)} className="goals">
              Goals
            </h4>
          </div>
          <div className="navbar-text" key={newItem.id}>
            <h4 className="text-title">{newItem.textTitle}</h4>
            <p className="text">{newItem.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
