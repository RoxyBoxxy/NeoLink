const WebSocketServer = require('ws')
const	wss = new WebSocketServer.Server({ port: 8080 })
console.log('listening on port: ' + 8080);

wss.on('connection', (ws) => {
  console.log("client connected");
    ws.on("message", async (msg) => {
        wss.clients.forEach( (client) => {
          if (client.readyState === ws.OPEN) {
            client.send(msg.toString());
          }
        })
  })
});