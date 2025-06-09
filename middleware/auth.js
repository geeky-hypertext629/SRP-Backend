const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const token = req.cookies.token;
  if (!token)
    return res.status(401).json({ authenticated: false });
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ authenticated: false });
    req.user = user;
    next();
  });
}
// app.get('/api/check-auth', (req, res) => {
//   if (!req.cookies.token) {
//     return res.status(401).json({ authenticated: false });
//   }
//   // ...validate token...
//   res.status(200).json({ authenticated: true });
// });

module.exports = authenticateToken; 