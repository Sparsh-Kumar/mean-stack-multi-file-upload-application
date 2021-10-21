

const mongoose = require ('mongoose');
const uniqueValidator = require ('mongoose-unique-validator');
const path = require ('path');


const ImageSchema = new mongoose.Schema ({

    originalName: {
        type: String,
        required: true,
        trim: true
    },

    encoding: {
        type: String,
        required: true,
        trim: true,
    },

    size: {
        type: Number,
        required: true,
    },

    key: {
        type: String,
        required: true,
        trim: true,
    },

    bucket: {
        type: String,
        required: true,
        trim: true,
    },

    location: {
        type: String,
        required: true,
        trim: true
    },

    etag: {
        type: String,
        required: true,
        trim: true
    },

    versionId: {
        type: String,
        default: ''
    }

}, { timestamps: true });


const Image = mongoose.model ('image', ImageSchema, 'images');
module.exports = {
    Image
}