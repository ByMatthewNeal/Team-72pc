const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },

    date: {
        type: Date,
        required: true,
    },

    picture: {
        type: String,
        required: true,
    },

    story: {
        type: String,
        required: true,
    }
 });

const News = mongoose.model('News', newsSchema);

module.exports = News;