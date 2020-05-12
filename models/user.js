const mongoose = require('mongoose');

const Schema =  mongoose.Schema;

const UserSchema = new Schema({
  name : {
    type:String,
    require:true
  },
  image: {
    type:String,
    require:true 
  },
  googleid: {
    type:String,
    require:true        
  }
}
  ,
  {timestamps:true}
);


module.exports = mongoose.model('User', UserSchema);
