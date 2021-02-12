import React, { useEffect, useCallback, useRef } from 'react';

const EndLivestreamPopUp = ({ closePopUp }) => {
  const endNode = useRef();
  const handleClick = useCallback((e) => {
    if (endNode.current.contains(e.target)) {
      return;
    }
    closePopUp();
  }, [closePopUp]);
  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    }
  }, [handleClick]);
  return (
    <div ref={endNode} className="end-livestream">
      <div className="title">Are You Sure About This!</div>
      <div className="warning">This action will end your livestream. Are you sure you want to end the livestream?</div>
      <div className="actions">
        <button onClick={() => console.log('stream ended')}>End Livestream</button>
        <button onClick={() => closePopUp()}>Cancel</button>
      </div>
    </div>
  );
}

export default EndLivestreamPopUp;