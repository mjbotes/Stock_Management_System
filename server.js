const express = require('express');
const path = require('path');

const app = express();

app.use(express.json({ extended: false }));

app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
