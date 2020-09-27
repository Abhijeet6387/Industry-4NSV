const jwt= require('jsonwebtoken');

module.exports = (req,res,next) => {
  try{
    //   const token=req.headers.authorization.split(" ")[1];
      const token=  req.query.actxzy || req.headers.authorization.split(" ")[1];
      const decoded=jwt.verify(token,"secret");
      req.userData =decoded;
      next();
  }  catch(error) {
      // return res.render('error');
      return res.status(401).json({
           message:'Authentication failed'});
  }

};