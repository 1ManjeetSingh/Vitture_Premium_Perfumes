// import jwt from 'jsonwebtoken';

//  const authenticateJWT = (req, res, next) => {
//     const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

//     if (token) {
//         jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
//             if (err) {
//                 return res.sendStatus(403);
//             }
//             req.user = user;
//             next();
//         });
//     } else {
//         res.sendStatus(401);
//     }
// };

// export default authenticateJWT;