const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try{
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.DB,connectionParams)
    console.log("Connected To DB");

    
  }catch(err){
    console.log(err);
    console.warn("Connection Failed")
  }
};
