const mongoose = require('mongoose');
module.exports = ()=>{
    return mongoose.connect('mongodb+srv://linkan:linkan_1234@cluster0.geage.mongodb.net/appartment?retryWrites=true&w=majority')
}