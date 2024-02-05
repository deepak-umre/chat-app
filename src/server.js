const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const { checkAllFiles } = require('./utils/logger'); // Import checkAllFiles from logger
const PORT = process.env.PORT || 5000;

// Add middleware to serve static files from the 'public' directory
app.use(express.static('public'));

// Other imports and middleware setup

// Routes
app.use('/auth', require('./routes/authRoutes'));
app.use('/profile', require('./routes/profileRoutes'));
app.use('/chat', require('./routes/chatRoutes'));

// Socket.io for real-time communication
io.on('connection', (socket) => {
  console.log('a user connected');
  // Handle chat, audio, and video calls
});

http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
