const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Memory to store user data
const memory = {};

// Route to save data
app.post('/save', (req, res) => {
    const { key, value } = req.body;
    memory[key] = value; // Save in memory
    res.json({ message: 'Data saved successfully!', memory });
});

// Route to retrieve data
app.get('/get/:key', (req, res) => {
    const key = req.params.key;
    if (key in memory) {
        res.json({ value: memory[key] });
    } else {
        res.status(404).json({ error: 'Key not found' });
    }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});