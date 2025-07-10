const express = require('express');
const app = express();
const db = require('./config/db');
require('dotenv').config();

const PORT = process.env.PORT;

// Middleware to parse JSON
app.use(express.json());
app.use(express.static('public'))

const authRouter = require('./routes/authRoute')

app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
    res.send("Hey, What's up?");
});

app.listen(PORT, () => {
    // Connect to DB
    db();
    console.log(`Server is running! http://localhost:${PORT}`);
});
