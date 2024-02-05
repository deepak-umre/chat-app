const app = require('./App');
const { checkAllFiles } = require('./utils/logger'); // Import checkAllFiles from logger

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});