require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'https://srp-pollution-integrated.vercel.app', // Vite default port
  credentials: true
}));

// Connect to MongoDB

connectDB();

// Routes
app.use('/api', require('./routes/auth'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 