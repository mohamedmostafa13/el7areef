const jwt = require('jsonwebtoken');
const Admin = require('../models/Admins');
const logger = require('../utils/Logger');

const filename = 'Auth.js';

const Authenticate = async (req, res, next) => 
{
    try 
    {
        const token = req.header('Authorization')
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        logger.log(filename, `Token: ${token}, Decoded: ${decoded.adminId}`);
        const user = await Admin.findOne({ _id: decoded.adminId });
        
        if (!user) 
            throw new Error('User not found.');
        
        req.token = token;
        req.user = user;
        next();
    } 
    catch (error) 
    {
        logger.error(filename, error);
        res.status(401).send({ error: 'Not authorized to access this resource.' });
    }
};
  
module.exports = Authenticate;