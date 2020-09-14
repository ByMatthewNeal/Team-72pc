const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newsSchema = new Schema({
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
    picture: {
        type: Image,
        required: true,
        unique: true,
    },
}, {
    story: {
        type: String,
        required: true,
        unique: true
    }
});

const News = mongoose.mondel('News', newsSchema);

module.exports = News;