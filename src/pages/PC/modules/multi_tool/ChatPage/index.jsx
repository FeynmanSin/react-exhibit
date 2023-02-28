import React, { useRef, useEffect, useState } from 'react'

import BaseInput from '../../../../../components/Base/Base-Input';
import BaseButton from '../../../../../components/Base/Base-Button';
import { getToken } from '../../../../../utils/utils'
const ChatPage = () => {
  const [chatRecord, setChatRecord] = useState([]);
  const inputRef = useRef('');
  const ws = new WebSocket('ws:192.168.1.108:3004');
  const { username } = getToken();
  useEffect(() => {
    bindEvent();
  }, []);

  const handleOpen = (e) => {
    ws.send(JSON.stringify({
      username: username,
    }))
  };

  const handleClose = (e) => {
    console.log('>>>>>WebSocket close', e);

  };

  const handleError = (e) => {
    console.log('>>>>>WebSocket error', e);

  };

  const handleMessage = (msg) => {
    let _msg = JSON.parse(msg.data);
    setChatRecord((prev) => {
      return [...prev, _msg];
    });
  };

  const bindEvent = () => {
    ws.addEventListener('open', handleOpen);
    ws.addEventListener('close', handleClose);
    ws.addEventListener('error,', handleError);
    ws.addEventListener('message', handleMessage);
  }

  const sendMessage = () => {
    let msg = inputRef.current.getInputVal();
    ws.send(JSON.stringify({
      username: username,
      to: username === '1' ? '2' : '1',
      data: {
        date: new Date().getTime(),
        message: msg,
      },
    }));
    inputRef.current.clearInputVal();
  }
  return (
    <>
      <header>ChatPage</header>
      <main className="content">
        <div className="messages">
          {
            chatRecord?.map(item => {
              return (
                <div className="message__item" key={Math.random() * item.date}>
                  <div>{item.date}</div>
                  <div>{item.message}</div>
                </div>
              )
            })
          }

        </div>
        <BaseInput ref={inputRef} />
        <BaseButton text="发送" onClick={sendMessage} />
      </main>
    </>
  )
}

export default ChatPage