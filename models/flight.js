const mongoose = require('mongoose');  // include on all models
const Schema = mongoose.Schema;  // include on all models 

const destinationSchema = new Schema({
    airport: {type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
    arrival: Date
});

const flightSchema = new Schema({
    airline: {type: String, enum: ['American', 'Delta', 'Southwest', 'United']},
    airport: {type: String, enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN']},
    flightNo: {type: Number, min: 10, max: 9999},
    departs: {type: Date, 
        default: function() {
            let d = new Date();
            let year = d.getFullYear();
            let month = d.getMonth();
            let day = d.getDate();
            let result = new Date(year + 1, month, day);
            return result;
       },
    destination: [ destinationSchema ]
    }
});

module.exports = mongoose.model('Flight', flightSchema);  // include on all models (but make sure to update)