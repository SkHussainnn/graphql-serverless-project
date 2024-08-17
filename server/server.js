const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const PORT = process.env.PORT || 3001;
io.on('connection', (socket) => {
  console.log('Client connected');
  // Add more event listeners as needed
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});