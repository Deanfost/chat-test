import React from 'react';
import './MessageList.css';

function MessageList(props) {
  return (
    <div className="list">
      {
        props.messages.map((m, i) => {
          const content = m.content;
          const sender = m.sender;
          return <p key={i}>{sender}: {content}</p>
        })
      }
    </div>
  );
}

export default MessageList;
