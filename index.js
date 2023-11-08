const express = require('express');
const cors = require("cors");
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 5000; // Port number for the server

const connectDB = require("./config/dbConfig");
app.use(express.json())
app.use(cors())


connectDB();

require('dotenv').config();


// // Routes
const noteRoutes = require('./routes/noteRoute');
const userRoutes = require('./routes/userRoute');

app.use('/api/notes', noteRoutes);
app.use('/api/users', userRoutes);

// Error handling middleware
 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
