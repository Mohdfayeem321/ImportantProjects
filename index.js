const express = require("express");
const cors = require("cors");
// const logger = require("morgan");
// require("dotenv").config();
const app = express();
// app.use(express.static("./resources"));

require("dotenv").config();

const db = require("./src/models");

app.use(express.json());

const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

const booksRoutes = require("./src/routes/booksRoutes");

app.use("/api/books/", booksRoutes);


const PORT = process.env.PORT || 5000;
db.sequelize
  .sync({ alter: true })
  .then((result) => {
    console.log("🧩🧩🧩🧩 Database Synced 🧩🧩🧩🧩");
    app.listen(PORT, () => {
      console.log("server is spinning on port " + PORT);
    });
  })
  .catch((error) => {
    console.error("Unable to sync to the database:", error);
  });
