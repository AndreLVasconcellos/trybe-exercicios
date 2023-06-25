const express = require('express');
const BooksController = require('../controllers/Books.controller'); // importamos o controller aqui

const router = express.Router();
router.get('/author', BooksController.getByAuthor);
router.get('/', BooksController.getAll);
router.get('/:id', BooksController.getById);
router.post('/', BooksController.create);
router.put('/:id', BooksController.update);
router.delete('/:id', BooksController.remove);

module.exports = router;