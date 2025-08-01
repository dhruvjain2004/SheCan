const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy data
const internData = {
  name: "Sarah Johnson",
  referralCode: "sarah2025",
  totalDonations: 1250,
  rewards: [
    {
      id: 1,
      name: "Coffee with CEO",
      description: "30-minute coffee chat with the CEO",
      unlocked: true,
      icon: "☕"
    },
    {
      id: 2,
      name: "Lunch & Learn",
      description: "Free lunch with the team",
      unlocked: true,
      icon: "🍕"
    },
    {
      id: 3,
      name: "Mentorship Program",
      description: "1-on-1 mentorship with senior developer",
      unlocked: false,
      icon: "👨‍💼"
    },
    {
      id: 4,
      name: "Conference Pass",
      description: "Free pass to tech conference",
      unlocked: false,
      icon: "🎫"
    }
  ]
};

const leaderboardData = [
  { name: "Sarah Johnson", donations: 1250, rank: 1 },
  { name: "Mike Chen", donations: 1100, rank: 2 },
  { name: "Emily Davis", donations: 950, rank: 3 },
  { name: "Alex Rodriguez", donations: 800, rank: 4 },
  { name: "Priya Patel", donations: 750, rank: 5 }
];

// API Routes
app.get('/api/intern-data', (req, res) => {
  res.json(internData);
});

app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboardData);
});

app.post('/api/login', (req, res) => {
  // Dummy login - always successful
  res.json({ 
    success: true, 
    message: "Login successful",
    user: {
      name: internData.name,
      referralCode: internData.referralCode
    }
  });
});

app.post('/api/signup', (req, res) => {
  // Dummy signup - always successful
  res.json({ 
    success: true, 
    message: "Account created successfully",
    user: {
      name: req.body.name || "New Intern",
      referralCode: req.body.referralCode || "newintern2025"
    }
  });
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 