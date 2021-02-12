import React, { useContext } from 'react';
import dots from '../../../../dist/icons/dots.png';
import { UserContext } from '../../MainBody/MainBody';

import CloseChatPopup from '../CloseChatPopup/CloseChatPopup';
import DeleteChatPopup from '../DeleteChatPopup/DeleteChatPopup';


const ThreeDotMenu = () => {
  const { title } = useContext(UserContext)

  return (
    <>
      <div className="dropdown">
        <button className="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img src={dots} alt="" /></button>
        <div style={{ left: "0px" }} className="dropdown-menu threeDotBtn" aria-labelledby="dropdownMenuButton">
          <div className="popup-box d-flex flex-column justify-content-center align-items-center">
            {
              title === 'professional' &&
              <div className="chat-close">
                <CloseChatPopup/>
              </div>
            }
            {
              title === 'employer' &&
              <div className="chat-close">
                <CloseChatPopup/>
              </div>
            }
            <div className="chat-delete">
              <DeleteChatPopup />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeDotMenu;