const mongoose = require('mongoose');


const floorTypesSchema = new mongoose.Schema(
    {
        
        playgroundId: { type: mongoose.Schema.Types.ObjectId, required: true, unique: false, index: true },
        date: { type: Date, default: Date.now },
        profit: { type: Number, default: 0 },
        
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