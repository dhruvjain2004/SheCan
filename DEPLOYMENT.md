# Deployment Guide - Render Backend

## Prerequisites
- A GitHub account
- A Render account (free tier available)

## Step 1: Prepare Your Repository

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Initial commit for Render deployment"
   git push origin main
   ```

## Step 2: Deploy on Render

### Option A: Deploy Backend Only (Recommended for this project)

1. **Go to [Render Dashboard](https://dashboard.render.com/)**
2. **Click "New +" and select "Web Service"**
3. **Connect your GitHub repository**
4. **Configure the service:**
   - **Name**: `intern-portal-backend` (or any name you prefer)
   - **Root Directory**: `server` (important!)
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: `Free`

5. **Environment Variables** (optional):
   - `NODE_ENV`: `production`
   - `PORT`: `10000` (Render will set this automatically)

6. **Click "Create Web Service"**

### Option B: Deploy Full Stack (Frontend + Backend)

1. **Follow the same steps as above**
2. **Set Root Directory to**: `/` (root of project)
3. **Build Command**: `npm run install-all && npm run build`
4. **Start Command**: `npm run server`

## Step 3: Update Frontend Configuration

After deployment, you'll need to update the frontend to use the new backend URL:

1. **Get your Render URL** (e.g., `https://your-app-name.onrender.com`)
2. **Update the client proxy** in `client/package.json`:
   ```json
   "proxy": "https://your-app-name.onrender.com"
   ```

3. **For production builds**, update API calls to use the full URL:
   ```javascript
   // Instead of relative URLs like '/api/intern-data'
   // Use: 'https://your-app-name.onrender.com/api/intern-data'
   ```

## Step 4: Test Your Deployment

1. **Visit your Render URL** to test the API endpoints
2. **Test the endpoints**:
   - `GET /api/intern-data`
   - `GET /api/leaderboard`
   - `POST /api/login`
   - `POST /api/signup`

## Important Notes

### Render Free Tier Limitations
- **Sleep after 15 minutes** of inactivity
- **Cold start** takes 30-60 seconds
- **Limited bandwidth** and build minutes

### Environment Variables
- Render automatically provides `PORT` environment variable
- Set `NODE_ENV=production` for production optimizations

### CORS Configuration
The backend is already configured with CORS to allow requests from any origin, which is suitable for development and deployment.

## Troubleshooting

### Common Issues:

1. **Build fails**: Check that all dependencies are in `package.json`
2. **Service won't start**: Verify the start command is correct
3. **API calls fail**: Check CORS configuration and URL endpoints
4. **Cold start delays**: Normal for free tier, consider upgrading for production

### Logs
- Check Render dashboard for build and runtime logs
- Monitor the "Logs" tab in your Render service

## Next Steps

After successful backend deployment:
1. Deploy frontend to Netlify/Vercel
2. Update frontend API endpoints to use Render URL
3. Test the complete application
4. Share your deployed application URLs

## Deployment URLs

Once deployed, you'll have:
- **Backend API**: `https://your-app-name.onrender.com`
- **API Endpoints**:
  - `https://your-app-name.onrender.com/api/intern-data`
  - `https://your-app-name.onrender.com/api/leaderboard`
  - `https://your-app-name.onrender.com/api/login`
  - `https://your-app-name.onrender.com/api/signup` 