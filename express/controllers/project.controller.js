/** Imports */
const { Project } = require('../models/project');

/** Export CRUD functions */
module.exports = {

    /** Reads all projects from MongoDB */
    all: function(req, res) {
        Project.find((err, docs) => {
            if(!err) {
                res.status(200).json(docs);
            }
            else {
                res.status(500).json({"error": err});
            }
        });
    }
}