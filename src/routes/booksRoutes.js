const express = require("express");
const { createBook, readBooks, updateBook, deleteBook, getBook } = require("../controllers/user/bookControllers");

const { historicalRequest } = require("../controllers/user/HistoricalRequestController");

const router = express.Router();

router.route("/createBook").post(createBook);

router.route("/readBooks").get(readBooks);

router.route("/updateBook/:id").put(updateBook);

router.route("/deleteBook/:id").delete(deleteBook);

router.route("/getBook/:id").get(getBook);

router.route("/historicalRequest").get(historicalRequest);

module.exports = router;
