import React from "react";
import Popover from "@material-ui/core/Popover";
import Picker from "emoji-picker-react";

export default function EmojiPicker() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <i
        className='far fa-smile emoji-button'
        aria-describedby={id}
        onClick={handleClick}
      ></i>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: -400,
          horizontal: 300,
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        anchorPosition={{
          left: 0,
          top: 0,
        }}
      >
        <Picker />
      </Popover>
    </div>
  );
}
