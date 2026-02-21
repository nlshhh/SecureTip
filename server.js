// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serves your HTML files

// -----------------------------------------------------------------------------
// MONGODB ATLAS CONNECTION
// -----------------------------------------------------------------------------
// REPLACE '<YOUR_CLUSTER_ADDRESS>' below with the specific address from your Atlas dashboard.
// Example: cluster0.xvq9z
// make sure the database name '/securetipDB' is there.
// -----------------------------------------------------------------------------

const DB_URI = process.env.MONGO_URI;

// Connect to Database
mongoose.connect(DB_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas (Cloud)"))
  .catch(err => {
      console.error("❌ Could not connect to MongoDB Atlas");
      console.error("Error details:", err.message);
      console.error("Make sure your IP is whitelisted in Atlas Network Access!");
  });

// Define the Schema (Structure of the data)
const tipSchema = new mongoose.Schema({
    activityType: String,
    location: String,
    description: String,
    date: String,
    submittedAt: { type: Date, default: Date.now }
});

const Tip = mongoose.model('Tip', tipSchema);

// --- API ROUTES ---

// 1. Submit a Tip (POST)
app.post('/api/submit', async (req, res) => {
    try {
        console.log("📩 New Report Received:", req.body); // Shows in Terminal
        
        const newTip = new Tip(req.body);
        await newTip.save();
        
        console.log("✅ Report Saved to Database!");
        res.status(201).json({ message: "Report submitted successfully!" });
    } catch (error) {
        console.error("Error saving report:", error);
        res.status(500).json({ message: "Error saving report." });
    }
});

// 2. Get all Tips (GET) - For Admin Dashboard
app.get('/api/tips', async (req, res) => {
    try {
        // Sort by newest first (-1)
        const tips = await Tip.find().sort({ submittedAt: -1 });
        res.json(tips);
    } catch (error) {
        res.status(500).json({ message: "Error fetching tips." });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});