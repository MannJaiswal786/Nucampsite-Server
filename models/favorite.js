const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
user: {
type: mongoose.Schema.Types.ObjectId,
ref: 'User',
required: true,
},
campsites: [ 
    {
type: mongoose.Schema.Types.ObjectId,
ref: 'Campsite'
},
],
},
{
timestamps: true,
});

const Favorite = mongoose.model('Favorite', favoriteSchema);
module.exports = Favorite;
