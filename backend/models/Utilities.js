const mongoose = require('mongoose');


const utilitiesSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: false },
        description: { type: String, required: false, unique: false },
        type: { type: String, required: true, unique: false },
        
    },
    { 
        timestamps: true,
        collation:  {
                        locale: 'en_US',
                        caseLevel: true,
                        strength: 2
                    }
    },
        
)

const Utility = mongoose.model('Utilities', utilitiesSchema);


module.exports = Utility;