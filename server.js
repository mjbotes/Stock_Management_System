const express = require("express");

const app = express();

app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/product", require("./routes/api/product"));
app.use("/api/auth", require("./routes/api/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
