

const mongoose = require('mongoose');

// MongoDB connection URL from MongoDB Atlas
const dbUrl = process.env.MONGO_URI;

// Connect to the MongoDB database
const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
  }
};

 

module.exports =  connectToDatabase;
