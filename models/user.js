const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        default: ''
    }
,
lastName: {
type: String,
default: ''
},
admin: {
    type: Boolean,
    default: false
}, 
facebookId: {
type: String,
}
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);