import React from 'react';

const SliderContents = ({ content }) => {
  const { heading, img, text } = content;
  return (
    <>
      <div>
        <div className="border p-4 bg-white w-75 m-auto business-shadow">
          <h5
            style={{ fontSize: "22px", fontFamily: "Rubik" }}
            className="heading-color pb-2"
          >
            {heading}
          </h5>
          <span
            style={{ fontSize: "17px", fontFamily: "Rubik", fontWeight: 400, color: "#5B5B5B" }}
            className=""
          >
            {text}
          </span>
        </div>
        <div className="mt-4">
          <img className="d-block slidePhoto" src={img} alt="slide-img" />
        </div>
      </div>
    </>
  );
};

export default SliderContents;