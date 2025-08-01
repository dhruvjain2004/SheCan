# Render Deployment - Step by Step Guide

## Step 1: Access Render Dashboard
1. **Open your browser** and go to: https://dashboard.render.com/
2. **Sign up/Login** with your GitHub account
3. **Click "Sign up for free"** if you don't have an account

## Step 2: Create New Web Service
1. **Click the "New +" button** in the top right corner
2. **Select "Web Service"** from the dropdown menu

## Step 3: Connect GitHub Repository
1. **Click "Connect account"** next to GitHub (if not already connected)
2. **Authorize Render** to access your GitHub repositories
3. **Search for your repository**: `dhruvjain2004/SheCan`
4. **Click on your repository** to select it

## Step 4: Configure the Service
Fill in these exact settings:

### Basic Settings:
- **Name**: `shecan-backend` (or any name you prefer)
- **Region**: Choose closest to you (e.g., Frankfurt, Singapore, etc.)
- **Branch**: `main`
- **Root Directory**: `server` ⚠️ **VERY IMPORTANT!**

### Build & Deploy Settings:
- **Runtime**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `npm start`

### Plan:
- **Plan**: `Free`

## Step 5: Environment Variables (Optional)
Click "Advanced" and add:
- **Key**: `NODE_ENV`
- **Value**: `production`

## Step 6: Deploy
1. **Click "Create Web Service"**
2. **Wait for deployment** (usually 2-5 minutes)
3. **Watch the build logs** for any errors

## Step 7: Get Your URL
Once deployment is successful, you'll see:
- **Your app URL**: `https://shecan-backend.onrender.com` (or similar)
- **Status**: "Live"

## Step 8: Test Your API
Visit these URLs to test:
- `https://your-app-name.onrender.com/api/intern-data`
- `https://your-app-name.onrender.com/api/leaderboard`
- `https://your-app-name.onrender.com/api/login`
- `https://your-app-name.onrender.com/api/signup`

## Troubleshooting

### If Build Fails:
1. **Check the logs** in Render dashboard
2. **Common issues**:
   - Wrong root directory (should be `server`)
   - Missing dependencies in package.json
   - Wrong start command

### If Service Won't Start:
1. **Check the logs** for error messages
2. **Verify start command** is `npm start`
3. **Check if port is set correctly** (Render sets PORT automatically)

### If API Calls Fail:
1. **Test the URL directly** in browser
2. **Check CORS settings** (already configured)
3. **Verify the endpoint paths** are correct

## Next Steps After Deployment

1. **Copy your Render URL**
2. **Update frontend proxy** in `client/package.json`
3. **Deploy frontend** to Netlify/Vercel
4. **Test the complete application**

## Support
If you encounter any issues:
1. **Check the deployment logs** in Render dashboard
2. **Share the error message** with me
3. **I can help troubleshoot** specific issues

## Your Repository Info
- **GitHub**: https://github.com/dhruvjain2004/SheCan
- **Root Directory**: `server`
- **Main File**: `server/index.js`
- **Package Manager**: npm 