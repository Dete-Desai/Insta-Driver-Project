import React, { useEffect, useCallback, useRef } from "react";

const HandlerPopUp = ({ closeHandlePopUp, saveHandler, instahandler }) => {
  const handlerRef = useRef();

  const handleClick = useCallback(
    (e) => {
      if (handlerRef.current.contains(e.target)) {
        return;
      }
      closeHandlePopUp();
    },
    [closeHandlePopUp]
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
          onClick={() => closeHandlePopUp()}
          className="badge badge-pill badge-white float-right"
        >
          x
        </span>
      </div>
      <div className="msg-content">
        <p>
          Hey! This is a one-time entry. Once you add your handle, you cannot
          change it again. Are you sure you want to go with this handle?
        </p>
      </div>
      <div className="business-url">
        www.instadriver.com/business/
        <span>{instahandler ? instahandler : "Uber"}</span>
      </div>
      <div className="actions">
        <button onClick={() => saveHandler(true)}>Yes! Use this handle</button>
        <button
          onClick={() => {
            closeHandlePopUp();
            saveHandler(false);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default HandlerPopUp;
