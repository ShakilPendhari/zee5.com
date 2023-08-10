function generateOTP() {
    // Generate a random number between 1000 and 9999 (inclusive)
    const otp = Math.floor(Math.random() * 9000) + 1000;
    return otp;
  }

  module.exports = generateOTP