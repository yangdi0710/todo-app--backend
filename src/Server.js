const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes/ToDoRoute");

const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });

const app = express();
const PORT = process.env.port || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to mongoDB"))
  .catch((err) => console.log(err));

app.use(routes);
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
