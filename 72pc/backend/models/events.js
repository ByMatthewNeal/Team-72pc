const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventsSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
}, {
    date: {
        type: Date,
        required: true,
    },
}, {
    location: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    picture: {
        type: String,
        requred: true,
        unique: true,
    },
}, {
    details: {
        type: String,
        required: true,
        unique: true,
    }
});

const Events = mongoose.model('Events', eventsSchema);

module.exports = Events;