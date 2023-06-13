const mongoose = require('mongoose');


const reviewsSchema = new mongoose.Schema(
    {
     
        userId: { type: mongoose.Schema.Types.ObjectId, required: true, unique: false, index: true },
        playgroundId: { type: mongoose.Schema.Types.ObjectId, required: true, unique: false, index: true },
        rating: { type: Number, required: true, unique: false, min: 0, max: 5 },
        comment: { type: String, required: false, unique: false },
        
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

const Review = mongoose.model('Reviews', reviewsSchema);


module.exports = Review;