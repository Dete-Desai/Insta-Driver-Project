import React, { useState } from "react";

const CommentInput = () => {
  const [messages, setMessages] = useState();
  const [comment, setComment] = useState("");
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    if (chosenEmoji) {
      setComment(comment + chosenEmoji.emoji);
    }
  };

  const handleClick = () => {
    if (comment !== "") {
      const message = {
        id: new Date().getSeconds(),
        author: "John Doe",
        username: "@JohntheD",
        time: "5h",
        comment: comment,
        avatar:
          "https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      };
      setMessages((current) => [...current, message]);
      setComment("");
      setShowEmojis(false);
      setChosenEmoji(null);
    }
    return;
  };

  return (
    <div className="row" style={{ marginTop: 134, marginLeft: 0 }}>
      <div className="livestream-message-area" style={{ width: 670 }}>
        <div className="livestream-text-area">
          <div className="livestream-text-input">
            <div>
              <input
                type="text"
                value={comment}
                required
                onChange={(e) => setComment(e.target.value)}
                onKeyDown={(e) => {
                  if (e.code === "Enter") {
                    handleClick();
                  }
                }}
                className="custom-input-live"
                placeholder="Type your comment"
                maxLength={150}
              />
              <span onClick={() => setShowEmojis(!showEmojis)}>
                <i className="far fa-grin-alt"></i>
              </span>
            </div>
            <div className="livestream-send">
              <span onClick={() => handleClick()}>
                <i className="far fa-paper-plane"></i>
              </span>
              <span className="span-smaller">0/150</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentInput;
