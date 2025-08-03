const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connection successful");
})
.catch((error) => {
    console.log("Received an error:", error);
});

// Start the server
app.listen(3000, () => {
    console.log("Server started at port no 3000");
});

// Routes
app.get('/', (req, res) => {
    res.send("Hello kaise ho sare");
});

app.post('/api/cars', (req, res) => {
    const { name, brand } = req.body;
    console.log("Car Name:", name);
    console.log("Car Brand:", brand);
    res.send("Car submitted successfully");
});
