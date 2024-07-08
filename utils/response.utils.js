
const sendErrorResponse = (res, statusId, message, additionalInfo = {}) => {
    res.status(statusId).send({ statusId, message, ...additionalInfo });
  };
  
  module.exports = sendErrorResponse;
  