const jwt = require('jsonwebtoken');


function getSigninPage(req,res) {
  res.render('signin')
}

function getSignupPage(req,res) {
  res.render('signup');
}

function getAccessToken(req,res) {
  const user = req.body;
  const userId = {id: user.id}
  if (!userId) return res.status(401).json({msg: 'Not Found Text'});

  const accessToken = jwt.sign(userId, process.env.JWT_SECRET_TEXT, {expiresIn: '40s'});
  res.cookie('jwt', accessToken, {
    httpOnly: true,
    maxAge: 1000 * 40,
  });

  res.json({accessToken: accessToken})
}




module.exports = {
  getSigninPage,
  getSignupPage,
  getAccessToken
}