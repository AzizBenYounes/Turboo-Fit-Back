const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/connectDB');
const userRoutes = require('./routes/users.route');

const app = express();

// Middleware
app.use(express.json());

// CORS
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));

// Connect DB
connectDB();

// Routes
app.use('/api/auth', require('./routes/auth.route.js'));
app.use('/api/users', userRoutes);
app.use("/api/products", require("./routes/productRoutes"));

// Test route
app.get('/', (req, res) => {
  res.send('✅ TurboFit API is running!');
});

// Start server
const PORT = process.env.PORT || 5600;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));