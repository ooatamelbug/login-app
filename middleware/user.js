const jwt = require('jsonwebtoken');


module.exports = (req,res,next)=>{
  const authHaeder = req.get('Authorization');
  if(!authHaeder){
    const error = new Error('wrong in authentication');
    error.statusCode = 500;
    throw error;
  }
  const token = authHaeder.split(' ')[1];
  let verifyAuth;
  try {
    verifyAuth = jwt.verify(token,'secretLoginUserInNewProfile');
  }
  catch (err) {
    err.statusCode = 500;
    throw err;
  }
  finally {
    if(!verifyAuth){
      const error = new Error('No Authentication');
      error.statusCode = 500;
      throw error;
    }
    req.userIdPatient = verifyAuth.userIdPt;
    next();
  }
}
