const express = require("express");
const mongoose = require("mongoose");
const mainRouter = require("./routes/index");
const { handleNotFound } = require("./utils/errors");

const app = express();
const { PORT = 3001 } = process.env;

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(console.error);

app.use(express.json());
app.use("/", mainRouter);
app.use((req, res, next) => {
  req.user = {
    _id: "68755ef2a926bdc5468bf321",
  };
  next();
});

app.use(handleNotFound);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
