const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
    name: String,
    address: String,
    number: String
});

module.exports = mongoose.model('Form', FormSchema);
