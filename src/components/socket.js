// socket.js
import { io } from 'socket.io-client';

const socket = io(process.env.REACT_APP_API_URL, {
  transports: ['websocket'], // Force WebSocket transport
  autoConnect: false,        // Will manually connect after mounting
});

export default socket;
