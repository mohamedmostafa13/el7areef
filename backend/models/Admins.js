const mongoose = require('mongoose');


const adminsSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: false },
        username: { type: String, required: true, unique: true, index: true },
        password: { type: String, required: true, unique: false },
        email: { type: String, required: false, unique: true },

    },
    /* Generate example document:
{
    "name": "admin",
    "username": "admin",
    "password": "admin",
    "email": "admin@admin"
}

    */
    { 
        timestamps: true,
        collation:  {
                        locale: 'en_US',
                        caseLevel: true,
                        strength: 2
                    }
    },
        
)

const Admin = mongoose.model('Admins', adminsSchema);


module.exports = Admin;