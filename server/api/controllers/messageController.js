const User = require('mongoose').model('User');

// GET /api/message/message1
exports.getMessage1 = function (req, res, next) {
  return res.json({
    message: 'Authorized: message 1 from api.'
  });
};

// GET /api/message/message2
exports.getMessage2 = function (req, res, next) {
  return res.json({
    message: 'Authorized: message 2 from api.'
  });
};


exports.getUsers = async (req, res, next) => {
  let userMap = null;
  await User.find({}, (err, users) => {
    userMap = users;
  });
  return res.json(userMap);
};
