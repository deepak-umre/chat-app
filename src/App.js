const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const chatRoutes = require('./routes/chatRoutes');
const profileRoutes = require('./routes/profileRoutes');
const { checkAllFiles } = require('./utils/logger'); // Import checkAllFiles from logger
const errorHandlingMiddleware = require('./middleware/errorHandlingMiddleware');

// Other imports and middleware setup

// Routes
app.use('/chat', chatRoutes);
app.use('/profile', profileRoutes);

// Socket.io for real-time communication
io.on('connection', (socket) => {
  console.log('a user connected');
  // Handle chat, audio, and video calls
});

// Error handling middleware
app.use(errorHandlingMiddleware);

const PORT = process.env.PORT || 5000;
http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});