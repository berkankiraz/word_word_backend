const mongoose = require("mongoose");

const schema = mongoose.Schema({
 
    english: String,
    turkish: String,
    sentences: String,
    know: String,
    token:String
  
});

module.exports = mongoose.model("Post", schema);
