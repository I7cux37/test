const express = require('express');
const router = express.Router();
const User = require('mongoose').model('User');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Boilerplate Webpack React Node.js' });
});

//* GET /example */
// router.get('/example', function(req, res, next) {
//   res.render('example', { title: 'Example Pug template' });
// });

// router.get('/users', (req, res, next) => {
//   User.find({}, (err, users) => {
//     const userMap = {};
//
//     users.forEach((user) => {
//       userMap[user._id] = user;
//     })
//     res.json(userMap);
//   });
// });

module.exports = router;
