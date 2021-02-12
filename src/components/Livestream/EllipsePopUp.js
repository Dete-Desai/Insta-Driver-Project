import React, { useEffect, useCallback, useRef } from 'react';

const EllipsePopUp = ({
  toggleChatDiv,
  showChat,
  toggleSereneMode,
  sereneMode,
  isAuthenticated,
  triggerPopUp,
  closeEllipse,
}) => {
  const ellipseRef = useRef();
  const handleClick = useCallback(
    (e) => {
      if (ellipseRef.current.contains(e.target)) {
        return;
      }
      closeEllipse();
    },
    [closeEllipse]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [handleClick]);

  return (
    <div ref={ellipseRef} className='card card-body' id='ellipse-popup'>
      <span onClick={() => toggleSereneMode()}>
        {sereneMode ? 'Exit Serene Mode' : 'Serene Mode'}
      </span>
      <span onClick={() => toggleChatDiv()}>
        {showChat ? 'Hide Chat' : 'Show Chat'}
      </span>
      {isAuthenticated ? (
        <span onClick={() => console.log('am reporting abuse')}>
          Report Abuse
        </span>
      ) : (
        <span onClick={() => triggerPopUp()}>Report Abuse</span>
      )}
    </div>
  );
};

export default EllipsePopUp;
