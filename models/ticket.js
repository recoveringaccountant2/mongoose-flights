const mongoose = require('mongoose');  // include on all models 
const Schema = mongoose.Schema;  // include on all models 

const ticketSchema = new Schema({
    seat: {type: String, match: /[A-F][1-9]\d?/},
    price: {type: Number, min: 0},
    flight: {type: Schema.Types.ObjectId, ref: 'Flight'}  
});

module.exports = mongoose.model('Ticket', ticketSchema);  // include on all models (but make sure to update)