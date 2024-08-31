const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const treatmentRoutes = require('./routes/treatment'); // Ensure this path is correct

dotenv.config();
const app = express();

const cors = require('cors');
app.use(cors());

// Connect to MongoDB
connectDB();

// Middleware for parsing JSON
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/treatment', treatmentRoutes); // Ensure this is correctly set up

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
