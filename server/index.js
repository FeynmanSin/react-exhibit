const Ws = require('ws');
const userArray = [];
; (function (Ws) {
  const server = new Ws.Server({ port: 3004 });
  const init = () => {
    bindEvent();
  };

  const handleOpen = (e) => {
    console.log('>>>>>WebSocket open', e);
  };

  const handleClose = (e) => {
    // console.log('>>>>>WebSocket close', e);

  };

  const handleError = (e) => {
    // console.log('>>>>>WebSocket error');

  };

  const handleMessage = (msg, ws) => {
    let userData = JSON.parse(msg);
    console.log('>>>>>userData', userData)
    if (checkUserIsRegister(userData)) {
      userArray.push({
        'username': userData.username,
        'ws': ws
      })
    } else {
      for (var i = 0; i < userArray.length; i++) {
        if (userData.to === userArray[i]['username']) {
          console.log(">>>>>>>>userData.to", userData.to);
          userArray[i]['ws'].send(JSON.stringify(userData.data));
          break;
        }
      }
    }
  };

  const handleConnection = (ws) => {
    ws.on('message', (msg) => handleMessage(msg, ws));

  };
  const bindEvent = () => {
    server.on('open', handleOpen);
    server.on('close', handleClose);
    server.on('error,', handleError);
    server.on('message', handleMessage);
    server.on('connection', handleConnection)
  }
  const checkUserIsRegister = (userData) => {
    for (var i = 0; i < userArray.length; i++) {
      if (userData.username === userArray[i]['username']) {
        return false;
      }
    }
    return true;
  }

  init();
})(Ws);