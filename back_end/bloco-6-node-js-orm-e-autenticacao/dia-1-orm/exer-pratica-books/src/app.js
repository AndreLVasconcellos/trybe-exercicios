const express = require('express');
const bookRoutes = require('./routers/books.router')
const app = express();
app.use(express.json());
app.use('/books', bookRoutes);
module.exports = app;