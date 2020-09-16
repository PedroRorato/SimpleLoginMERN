const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/simpleLogin', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});