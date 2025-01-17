const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

// Middleware
app.use(express.json());

// Sample Route
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
