# Vercel Frontend Deployment Guide

## Prerequisites
- Your Render backend URL (e.g., `https://shecan-backend.onrender.com`)
- GitHub repository connected to Vercel

## Step 1: Update Backend URL

**IMPORTANT**: Before deploying, you need to update the backend URL in two places:

### 1. Update vercel.json
Replace `your-render-backend-url.onrender.com` with your actual Render URL:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "framework": "create-react-app",
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "https://YOUR-ACTUAL-RENDER-URL.onrender.com/api/$1"
    }
  ]
}
```

### 2. Update client/package.json (optional)
You can also update the proxy for development:
```json
"proxy": "https://YOUR-ACTUAL-RENDER-URL.onrender.com"
```

## Step 2: Deploy on Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**
2. **Click "New Project"**
3. **Import your GitHub repository**: `dhruvjain2004/SheCan`
4. **Configure the project:**
   - **Framework Preset**: `Create React App`
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`

5. **Environment Variables** (optional):
   - `REACT_APP_API_URL`: `https://YOUR-RENDER-URL.onrender.com`

6. **Click "Deploy"**

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Navigate to client directory**:
   ```bash
   cd client
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Link to existing project or create new
   - Set root directory to `client`
   - Confirm settings

## Step 3: Configure Domain (Optional)

1. **Go to your Vercel project dashboard**
2. **Click "Settings" → "Domains"**
3. **Add custom domain** if desired

## Step 4: Test Your Deployment

1. **Visit your Vercel URL** (e.g., `https://shecan-frontend.vercel.app`)
2. **Test the application**:
   - Login/Signup functionality
   - Dashboard data loading
   - Leaderboard display
   - API calls to Render backend

## Step 5: Update API Calls (If Needed)

If you encounter CORS issues, you may need to update the API calls in your React components to use the full Render URL:

```javascript
// Instead of relative URLs
axios.get('/api/intern-data')

// Use full URL
axios.get('https://YOUR-RENDER-URL.onrender.com/api/intern-data')
```

## Troubleshooting

### Common Issues:

1. **Build Fails**:
   - Check Vercel build logs
   - Ensure all dependencies are in package.json
   - Verify build command is correct

2. **API Calls Fail**:
   - Check CORS configuration on Render
   - Verify backend URL is correct
   - Test backend endpoints directly

3. **Environment Variables**:
   - Set `REACT_APP_API_URL` in Vercel dashboard
   - Restart deployment after adding variables

### Vercel vs Render URLs:
- **Frontend**: `https://your-app.vercel.app`
- **Backend**: `https://your-app.onrender.com`

## Final URLs

After successful deployment:
- **Frontend**: `https://your-app.vercel.app`
- **Backend**: `https://your-app.onrender.com`
- **API Endpoints**: `https://your-app.onrender.com/api/*`

## Next Steps

1. **Test complete application flow**
2. **Share your deployed URLs**
3. **Update documentation with live URLs**
4. **Monitor performance and logs**

## Support

If you encounter issues:
1. Check Vercel build logs
2. Check Render deployment logs
3. Test API endpoints directly
4. Share error messages for troubleshooting 