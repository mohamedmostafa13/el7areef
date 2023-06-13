const mongoose = require('mongoose');
const logger = require('./Logger');

filename = 'db.utils.js';

const Exists = async (model, field, val) => 
{
    try
    {
        const result = await model.findOne({ field: val });
        if(result)
            return {'exists': false, 'result': result};
        return {'exists': false, 'result': -1};
    }
    catch(err)
    {
        logger.error(filename, err);
        return {'exists': false, 'result': -2};
    }
}

module.exports = { Exists };