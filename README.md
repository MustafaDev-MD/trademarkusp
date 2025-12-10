# Trademark USP Website

A professional website for Trademark USP services.

## 🚀 Deployment on Vercel

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **For production deployment**:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your Git repository (GitHub, GitLab, or Bitbucket)
   - If you haven't connected your repo, you can drag and drop the project folder
4. Vercel will auto-detect it as a static site
5. Click **"Deploy"**

### Option 3: Deploy via GitHub Integration

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Vercel will automatically deploy and set up continuous deployment

## 📁 Project Structure

```
trademarkusp/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript file
├── imagees/           # Images directory
├── vercel.json        # Vercel configuration
└── README.md         # This file
```

## 🔧 Configuration

The `vercel.json` file includes:
- Static site configuration
- Security headers
- Image caching headers
- Proper routing

## 🌐 Custom Domain

After deployment, you can add a custom domain:
1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## 📝 Notes

- All static files are automatically served
- Images in the `imagees/` folder are cached for optimal performance
- The site is configured with security headers for better protection


