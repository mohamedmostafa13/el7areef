const mongoose = require('mongoose');


const playgroundOwnerSchema = new mongoose.Schema(
    {
       
        name: { type: String, required: true, unique: false },
        phone: { type: String, required: true, unique: false },
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true, unique: false },
        email: { type: String, required: false, unique: true },
        totalBalance: { type: Number, required: false, unique: false, default: 0, index: true },
        
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

const PlaygroundOwner = mongoose.model('PlaygroundOwner', playgroundOwnerSchema);


module.exports = PlaygroundOwner;