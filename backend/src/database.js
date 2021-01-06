const mongoose = require('mongoose')

const URI = 'mongodb://localhost/studyants';

mongoose.connect(URI,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true}).then(db => console.log('db is conected')).catch(err => console.error(err))

module.exports = mongoose;
