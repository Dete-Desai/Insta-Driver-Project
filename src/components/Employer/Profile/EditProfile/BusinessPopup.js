import React, { useEffect, useCallback, useRef } from "react";

const BussinessPopUp = ({ closeBusinessPopUp, saveBusinessName, name }) => {
  const handlerRef = useRef();

  const handleClick = useCallback(
    (e) => {
      if (handlerRef.current.contains(e.target)) {
        return;
      }
      closeBusinessPopUp();
    },
    [closeBusinessPopUp]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [handleClick]);

  return (
    <div ref={handlerRef} className="card card-body instahandler-popup">
      <div className="close-btn-x mt-2 mb-2">
        <span
          onClick={() => closeBusinessPopUp()}
          className="badge badge-pill badge-white float-right"
        >
          x
        </span>
      </div>
      <div className="msg-content">
        <p>
          Hey! This is a one-time entry. Once you add your business name, you
          cannot change it again. Are you sure you want to go with this business
          name?
        </p>
      </div>
      <div className="business-url">
        <span>{name ? name : "Uber"}</span>
      </div>
      <div className="actions">
        <button onClick={() => saveBusinessName(true)}>
          Yes! Use this name
        </button>
        <button
          onClick={() => {
            closeBusinessPopUp();
            saveBusinessName(false);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BussinessPopUp;
