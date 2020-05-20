const moongoose = require("mongoose");

const URI =
  "mongodb+srv://admin:admin@cluster0-rxtwc.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
  await moongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("db connected..");
};

module.exports = connectDB;
