const {
  HistoricalRequest,
} = require("../../models");

// Saving a historical request
exports.saveHistoricalRequest = async (req, res) => {
  try {
    await HistoricalRequest.create({
      url: req.url,
      method: req.method,
      headers: req.headers.accept,
      body: req.body,
    });
  } catch (error) {
    console.error('Error saving historical request:', error);
  }
};

// Get History Request;

exports.historicalRequest = async (req, res) => {

  try {

    const getAll = await HistoricalRequest.findAll();

    return res.status(200).send({data: getAll})

  } catch (error) {
    console.error('Error saving historical request:', error);
  }
};