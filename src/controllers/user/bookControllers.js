const {
  Book,
} = require("../../models");

let { saveHistoricalRequest } =  require("./HistoricalRequestController")


// Create a new book
exports.createBook = async (req, res) => {
  try {
    let { author_name, book_name } = req.body;
    const book = await Book.create({ author_name, book_name });
    let _saveHistoricalRequest = await saveHistoricalRequest(req, res);
    return res.status(201).json({status:200, data: book });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read all books
exports.readBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    return res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Get One book
exports.getBook = async (req, res) => {
  try {
    let id = req.params.id;
    const book = await Book.findOne({ where: { id } });
     let _saveHistoricalRequest = await saveHistoricalRequest(req, res);
    return res.status(200).json({
      status: 200, data:book
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Update a book
exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Book.update(req.body, { where: { id } });
    if (updated) {
      const updatedBook = await Book.findByPk(id);
       let _saveHistoricalRequest = await saveHistoricalRequest(req, res);
      return res.json(updatedBook);
    }
    return res.status(404).json({ error: 'Book not found' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// delete a book
exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Book.destroy({ where: { id } });
    if (deleted) {
     let _saveHistoricalRequest = await saveHistoricalRequest(req, res);
      return res.status(200).send({ status: 200, message: "Book deleted successfully" });
      // After successful deletion, trigger a page refresh
    }
    return res.status(404).json({ message: 'Book not found' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
