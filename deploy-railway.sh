#!/bin/bash

# CanzaTrade Railway Deployment Script
# This script helps automate the deployment process to Railway

set -e

echo "🚀 CanzaTrade Railway Deployment Script"
echo "========================================"

# Check if Railway CLI is installed
if ! command -v railway &> /dev/null; then
    echo "❌ Railway CLI not found. Installing..."
    npm install -g @railway/cli
else
    echo "✅ Railway CLI found"
fi

# Check if user is logged in to Railway
if ! railway whoami &> /dev/null; then
    echo "🔐 Please log in to Railway..."
    railway login
else
    echo "✅ Logged in to Railway as $(railway whoami)"
fi

# Build the application
echo "🔨 Building CanzaTrade application..."
moon run :build

echo "✅ Build completed successfully!"

# Check if we're in a Railway project
if [ -f "railway.json" ]; then
    echo "📋 Railway configuration found"
    
    # Deploy to Railway
    echo "🚀 Deploying to Railway..."
    railway up
    
    echo "✅ Deployment completed!"
    echo ""
    echo "🌐 Your CanzaTrade application should now be running on Railway!"
    echo "📊 Check the Railway dashboard for deployment status and logs."
    echo ""
    echo "🔗 Health check endpoint: https://your-app.railway.app/health"
    echo "🏠 Main application: https://your-app.railway.app/"
    
else
    echo "❌ Railway configuration not found. Please ensure you have:"
    echo "   - railway.json"
    echo "   - Dockerfile.railway"
    echo "   - Connected your repository to Railway"
    echo ""
    echo "📖 See RAILWAY_DEPLOYMENT.md for setup instructions"
fi

echo ""
echo "🎉 Deployment script completed!"
