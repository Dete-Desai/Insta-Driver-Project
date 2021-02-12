import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

const inbox = [
  {
    id: 1,
    author: 'John Doe',
    username: '@JohntheD',
    time: '5h',
    comment: 'This is the amazing part of life. We now have to adjust to a new normal. All drivers are mandated to wear mask as they drive for. lorem ipsum lorem',
    avatar: 'https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
  },
  {
    id: 2,
    author: 'John Doe',
    username: '@JohntheD',
    time: '5h',
    comment: 'This is the amazing part of life. We now have to adjust to a new normal. All drivers are mandated to wear mask as they drive for. lorem ipsum lorem',
    avatar: 'https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
  },
  {
    id: 3,
    author: 'John Doe',
    username: '@JohntheD',
    time: '5h',
    comment: 'This is the amazing part of life. We now have to adjust to a new normal. All drivers are mandated to wear mask as they drive for. lorem ipsum lorem',
    avatar: 'https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
  },
]

const LivestreamComments = () => {
  const [messages, setMessages] = useState(inbox);
  const [comment, setComment] = useState('');
  ;
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    if(chosenEmoji) {
      setComment(comment + chosenEmoji.emoji);
    }
  };

  const handleClick = () => {
    if (comment !== '') {
      const message = {
        id: new Date().getSeconds(),
        author: 'John Doe',
        username: '@JohntheD',
        time: '5h',
        comment: comment,
        avatar: 'https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
      }
      setMessages(current => [...current, message]);
      setComment('');
      setShowEmojis(false);
      setChosenEmoji(null);
    }
    return;
  }


  return (
    <div className='livestream-message-area'>
      <div className='livestream-message-inbox'>
        {messages.map((message, index) => (
          <div key={index} className='livestream-message-single'>
            <div className='livestream-userprofile'>
              <img
                src={message.avatar}
                className='livestream-userprofile-img'
                alt='DriverImage'
              />
              <span className='user-at user-at-font'>{message.author}</span>
              <span className='user-at  user-at-fade'>{message.username}</span>
              <span className='user-at user-at-fade'>{message.time}</span>
            </div>
            <div className='livestream-user-message'>
              <p className='message-p'>
                {message.comment}
              </p>
            </div>
          </div>
        ))}
        
      </div>
      <div className='livestream-text-area'>
        <div className='livestream-text-input'>
          <div>
            <input
              type='text'
              value={comment}
              required
              onChange={e => setComment(e.target.value)}
              onKeyDown={e => {
                if (e.code === 'Enter') {
                  handleClick();
                }
              }}
              className='custom-input-live'
              placeholder='Type your comment'
              maxLength={150}
            />
            <span onClick={() => setShowEmojis(!showEmojis)}>
              <i className='far fa-grin-alt'></i>
            </span>
          </div>
          <div className='livestream-send'>
            <span onClick={() => handleClick()}>
              <i className='far fa-paper-plane'></i>
            </span>
            <span className='span-smaller'>0/150</span>
          </div>
        </div>
      </div>
      { showEmojis && <Picker onEmojiClick={onEmojiClick} /> }
    </div>
  );
};

export default LivestreamComments;
