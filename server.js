const express = require('express');
require('dotenv').config();
const connectDB = require('./config/connectDB');
const userRoutes = require('./routes/users.route');

const app = express();

app.use(express.json());

// ⭐ FIXED CORS (manual and 100% reliable)
const allowedOrigins = [
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "https://turboo-fit-front.onrender.com",
  process.env.FRONTEND_URL
];

app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }

  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

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
