# 🚀 Render Deployment - Quick Reference

## Essential Settings
```
Name: shecan-backend
Root Directory: server ⚠️ CRITICAL!
Runtime: Node
Build Command: npm install
Start Command: npm start
Plan: Free
```

## Your Repository
- **GitHub**: https://github.com/dhruvjain2004/SheCan
- **Branch**: main
- **Root Directory**: server

## Quick Steps
1. Go to https://dashboard.render.com/
2. Click "New +" → "Web Service"
3. Connect GitHub → Select `dhruvjain2004/SheCan`
4. Set Root Directory to `server`
5. Click "Create Web Service"

## Test URLs (after deployment)
- `https://your-app-name.onrender.com/api/intern-data`
- `https://your-app-name.onrender.com/api/leaderboard`

## Common Issues
- ❌ Wrong root directory (must be `server`)
- ❌ Wrong start command (must be `npm start`)
- ❌ Missing dependencies in package.json

## Need Help?
- Check deployment logs in Render dashboard
- Share error messages with me
- I'll help troubleshoot specific issues 