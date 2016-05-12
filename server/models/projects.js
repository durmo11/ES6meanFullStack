var mongoose = require('mongoose');

module.exports = mongoose.model('Project', {
    clientName: {
        type: String,
        default: ''
    }
});
