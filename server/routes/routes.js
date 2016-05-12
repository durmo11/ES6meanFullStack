var Project = require('../models/projects');

function getProject(res) {
    Project.find(function (err, projects) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }
        res.json(projects); // return all projects in JSON format
    });
};

module.exports = function (app) {
    // api ---------------------------------------------------------------------
    // get all projects
    app.get('/', function (req, res) {
        // use mongoose to get all projects in the database
        getProject(res);
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
    });
    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
