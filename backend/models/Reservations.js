const mongoose = require('mongoose');


const reservationsSchema = new mongoose.Schema(
    {
        
        userId: { type: mongoose.Schema.Types.ObjectId, required: true, unique: false, index: true },
        playgroundId: { type: mongoose.Schema.Types.ObjectId, required: true, unique: false, index: true },
        date: { type: Date, required: true, unique: false, default: Date.now },
        price: { type: Number, required: true, unique: false },
        isPaid: { type: Boolean, required: true, unique: false, default: false },
        isCanceled: { type: Boolean, required: true, unique: false, default: false },
        isDeleted: { type: Boolean, required: true, unique: false, default: false },
        isReviewed: { type: Boolean, required: true, unique: false, default: false },
        profit: { type: Number, required: true, unique: false, default: 0 },
        timeSlot: { type: String, required: true, unique: false },
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

const Reservation = mongoose.model('Reservations', reservationsSchema);


module.exports = Reservation;