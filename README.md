# 🚀 Intern Portal - Full Stack Dashboard

A modern, responsive intern portal built with React frontend and Node.js backend. This application provides a comprehensive dashboard for interns to track their progress, view rewards, and compete on leaderboards.

## ✨ Features

### 🔐 Authentication
- **Login/Signup System**: Dummy authentication with modern UI
- **Form Validation**: Client-side validation with error handling
- **Responsive Design**: Works seamlessly on desktop and mobile

### 📊 Dashboard
- **Intern Profile**: Display intern name and personal information
- **Referral Code**: Unique referral code with copy-to-clipboard functionality
- **Donation Tracking**: Real-time display of total donations raised
- **Rewards System**: Visual representation of unlocked/locked rewards
- **Progress Indicators**: Clear status indicators for achievements

### 🏆 Leaderboard (Bonus Feature)
- **Ranking System**: Top interns ranked by donation amounts
- **Visual Rankings**: Trophy, medal, and award icons for top 3 positions
- **Statistics**: Total participants, donations, and averages
- **Achievement Badges**: Recognition for different performance categories

### 🎨 Modern UI/UX
- **Gradient Backgrounds**: Beautiful gradient color schemes
- **Card-based Layout**: Clean, organized information display
- **Interactive Elements**: Hover effects and smooth transitions
- **Icon Integration**: Lucide React icons for enhanced visual appeal
- **Responsive Grid**: Adaptive layout for different screen sizes

## 🛠️ Tech Stack

### Frontend
- **React 18**: Modern React with hooks and functional components
- **React Router**: Client-side routing and navigation
- **Axios**: HTTP client for API communication
- **Lucide React**: Beautiful, customizable icons
- **CSS3**: Custom styling with modern design patterns

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Fast, unopinionated web framework
- **CORS**: Cross-origin resource sharing support
- **Nodemon**: Development server with auto-reload

### Development Tools
- **Concurrently**: Run frontend and backend simultaneously
- **Proxy Configuration**: Seamless API communication in development

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd intern-portal
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Start the development servers**
   ```bash
   npm run dev
   ```

This will start both the backend server (port 5000) and frontend development server (port 3000).

### Manual Installation (Alternative)

If the above doesn't work, install dependencies manually:

```bash
# Install root dependencies
npm install

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install

# Return to root and start development
cd ..
npm run dev
```

## 📱 Usage

### Demo Credentials
- **Email**: demo@intern.com
- **Password**: password123

### Features Walkthrough

1. **Login/Signup**: Use the demo credentials or create a new account
2. **Dashboard**: View your profile, referral code, and rewards
3. **Copy Referral Code**: Click the copy button to share your code
4. **View Rewards**: See unlocked and locked rewards with descriptions
5. **Leaderboard**: Check your ranking and compare with other interns

## 🌐 API Endpoints

### Backend Routes
- `GET /api/intern-data` - Get intern dashboard data
- `GET /api/leaderboard` - Get leaderboard rankings
- `POST /api/login` - Dummy login endpoint
- `POST /api/signup` - Dummy signup endpoint

### Sample Data Structure
```json
{
  "name": "Sarah Johnson",
  "referralCode": "sarah2025",
  "totalDonations": 1250,
  "rewards": [
    {
      "id": 1,
      "name": "Coffee with CEO",
      "description": "30-minute coffee chat with the CEO",
      "unlocked": true,
      "icon": "☕"
    }
  ]
}
```

## 🚀 Deployment

### Frontend Deployment (Netlify/Vercel)
1. Build the React app:
   ```bash
   cd client
   npm run build
   ```
2. Deploy the `build` folder to your preferred platform

### Backend Deployment (Render/Railway)
1. Set environment variables:
   - `PORT`: Your desired port
   - `NODE_ENV`: production
2. Deploy the `server` folder
3. Update frontend API base URL for production

### Environment Variables
Create a `.env` file in the server directory:
```env
PORT=5000
NODE_ENV=development
```

## 📁 Project Structure

```
intern-portal/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   └── package.json
├── server/                # Node.js backend
│   ├── index.js          # Express server
│   └── package.json
├── package.json           # Root package.json
└── README.md
```

## 🎯 Key Features Implemented

✅ **Frontend Requirements**
- ✅ Dummy login/signup page
- ✅ Dashboard with intern name
- ✅ Dummy referral code display
- ✅ Total donations raised display
- ✅ Rewards/unlockables section

✅ **Backend Requirements**
- ✅ REST API with Express.js
- ✅ Dummy data endpoints
- ✅ User authentication endpoints
- ✅ Leaderboard data endpoint

✅ **Bonus Features**
- ✅ Leaderboard page with rankings
- ✅ Modern, responsive UI design
- ✅ Interactive elements and animations
- ✅ Copy-to-clipboard functionality
- ✅ Achievement badges system

## 🔧 Customization

### Adding New Rewards
Edit the `rewards` array in `server/index.js`:
```javascript
{
  id: 5,
  name: "New Reward",
  description: "Description here",
  unlocked: false,
  icon: "🎁"
}
```

### Modifying Leaderboard
Update the `leaderboardData` array in `server/index.js`:
```javascript
{
  name: "New Intern",
  donations: 1000,
  rank: 6
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built for SheCan Intern Portal Challenge
- Icons provided by Lucide React
- Modern UI patterns inspired by current design trends

---

**Happy Coding! 🎉** 