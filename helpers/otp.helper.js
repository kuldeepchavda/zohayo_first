

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000) + 1;
  }
  
  module.exports = generateOTP;
  