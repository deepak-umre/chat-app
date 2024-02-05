const bcrypt = require('bcrypt');

const bcryptUtils = {
  hashPassword: async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  },
  comparePassword: async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
  }
};

const checkAllFiles = () => {
  // Add your logic to check all files here
};

module.exports = { bcryptUtils, checkAllFiles };
