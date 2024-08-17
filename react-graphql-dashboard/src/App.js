import React, { useEffect } from 'react';
import socket from './socketService';
function App() {
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });
    // Add more event listeners as needed
    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <div className="App">
      Hi my name is Hussain
    </div>
  );
}
export default App;