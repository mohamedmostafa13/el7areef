const mongoose = require('mongoose');


const playgroundSchema = new mongoose.Schema(
    {

        name: { type: String, required: true, unique: false },
        address: { type: String, required: true, unique: false },
        lang: { type: Number, required: false, unique: false },
        lat: { type: Number, required: false, unique: false },
        country: { type: String, required: false, unique: false },
        city: { type: String, required: false, unique: false },
        neighborhood: { type: String, required: false, unique: false },
        description: { type: String, required: false, unique: false },
        pricePerHour: { type: Number, required: false, unique: false },
        ownerId: { type: mongoose.Schema.Types.ObjectId, required: true, unique: false, index: true },
        images: { type: [String], required: false, unique: false },
        utilities: { type: [String], required: false, unique: false },
        rating: { type: Number, required: false, unique: false },
        workingHours: { type: String, required: false, unique: false },
        floorType: { type: [String], required: false, unique: false },
        visa: { type: Boolean, required: false, unique: false, default: false },
        visaOnly: { type: Boolean, required: false, unique: false, default: false },
        isVerified: { type: Boolean, required: false, unique: false, default: false },
        isAvailable: { type: Boolean, required: false, unique: false, default: true },
        isDeleted: { type: Boolean, required: false, unique: false, default: false },



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

const Playground = mongoose.model('Playground', playgroundSchema);


module.exports = Playground;