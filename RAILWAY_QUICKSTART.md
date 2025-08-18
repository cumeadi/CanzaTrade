# 🚀 CanzaTrade Railway Quick Start

Deploy your CanzaTrade application to Railway in under 5 minutes!

## ⚡ Quick Deploy (3 Steps)

### 1. Connect to Railway
1. Go to [railway.app](https://railway.app) and sign in
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your CanzaTrade repository
5. Click "Deploy Now"

### 2. Set Environment Variables
In your Railway project dashboard:
- Go to "Variables" tab
- Add these variables:
```bash
NODE_ENV=production
ADMIN_PASSWORD=canza123
HOST=0.0.0.0
PORT=3000
```

### 3. Deploy!
Railway will automatically:
- Build your Docker container
- Run database migrations
- Start your application
- Provide a public URL

## 🎯 What You Get

- ✅ **Live URL**: `https://your-app.railway.app`
- ✅ **Health Checks**: Automatic monitoring
- ✅ **SSL Certificate**: HTTPS enabled
- ✅ **Auto-scaling**: Handles traffic spikes
- ✅ **Logs & Monitoring**: Built-in dashboard

## 🔧 Manual Deployment

If you prefer using the CLI:

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Deploy
./deploy-railway.sh
```

## 📱 Test Your Deployment

1. **Health Check**: `https://your-app.railway.app/health`
2. **Main App**: `https://your-app.railway.app/`
3. **Admin Access**: Use password `canza123`

## 🆘 Need Help?

- 📖 Full guide: [RAILWAY_DEPLOYMENT.md](./RAILWAY_DEPLOYMENT.md)
- 🐛 Issues: Check Railway logs in dashboard
- 💬 Support: [Railway Discord](https://discord.gg/railway)

---

**🎉 That's it! Your CanzaTrade app is now live on Railway!**
