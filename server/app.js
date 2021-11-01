const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { MONGOURI } = require("./keys");

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongodb");
});
mongoose.connection.on("error", () => {
  console.log("error connecting to mongodb");
});

//MONGODB MODELS
require("./models/user");
require("./models/post");

app.use(cors());
app.use(express.json());

//ROUTES
app.use(require("./routes/auth"));
app.use(require("./routes/post"));

app.listen(5000, () => {
  console.log("server started at port 5000");
});
