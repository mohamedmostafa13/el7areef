const logger = require('../utils/Logger');

const filename = 'PlaygroundOwners.js';


const seed = async (db, model, data) =>
{
    try 
    {
        await model.insertMany(data);
        logger.log(filename, `Data inserted successfully`);
    } 
    catch (err) 
    {
        logger.error(filename, err);
    }
    
};

module.exports = seed;