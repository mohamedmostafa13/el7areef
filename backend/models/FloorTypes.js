const mongoose = require('mongoose');


const floorTypesSchema = new mongoose.Schema(
    {
        type: { type: String, required: true, unique: true },
        description: { type: String, required: false, unique: false },
        
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

const FloorType = mongoose.model('FloorTypes', floorTypesSchema);


module.exports = FloorType;