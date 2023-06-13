const mongoose = require('mongoose');


const customersSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: false },
        phone: { type: String, required: true, unique: false },
        username: { type: String, required: true, unique: true, index: true },
        password: { type: String, required: true, unique: false },
        email: { type: String, required: false, unique: true },
        isVerified: { type: Boolean, required: true, unique: false, default: false },
        isDeleted: { type: Boolean, required: true, unique: false, default: false },

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

const Customer = mongoose.model('Customers', customersSchema);


module.exports = Customer;