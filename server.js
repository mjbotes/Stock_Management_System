const express = require('express');
const path = require('path');
const app = express();

app.use(express.json({ extended: false }));

app.use('/api/product', require('./routes/api/product'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
