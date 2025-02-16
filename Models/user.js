const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});


userSchema.pre('save' , async function(next) {
    const user = this;

    try {
        if(user.isModified('password')){
            user.password = await bcrypt.hash(user.password, 8);
        }
    } catch (error) {
        return next(error); // Pass the error to Express
    }

    next();
});


const User = mongoose.model('User', userSchema);
module.exports = User;