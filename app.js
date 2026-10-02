const express = require('express');
const app = express();

app.use(express.json()); // ← add this before routes

const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.listen(4000, () => console.log('Server running on port 4000'));