/** Imports */
const mongoose = require('mongoose');

/** Schema for project model */
const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageurl: {
        type: String
    },
    github: {
        type: String
    }
});

/** Project model */
let Project = mongoose.model('Project', projectSchema);

/** Exports */
module.exports = { Project };