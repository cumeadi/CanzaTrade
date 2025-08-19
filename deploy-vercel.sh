#!/bin/bash

# CanzaTrade Vercel Deployment Script
echo "🚀 Starting CanzaTrade deployment to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
else
    echo "✅ Vercel CLI found"
fi

# Check if user is logged in
if ! vercel whoami &> /dev/null; then
    echo "🔐 Please login to Vercel..."
    vercel login
else
    echo "✅ Already logged in to Vercel"
fi

# Build the application
echo "🔨 Building CanzaTrade..."
if npm run build; then
    echo "✅ Build successful"
else
    echo "❌ Build failed. Please fix build issues before deploying."
    exit 1
fi

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

echo ""
echo "🎉 Deployment complete!"
echo "📱 Check your Vercel dashboard for the deployment URL"
echo "🔧 Don't forget to set environment variables:"
echo "   - DATABASE_URL"
echo "   - ADMIN_PASSWORD"
echo "   - HOST"
echo "   - PORT"
echo "   - NODE_ENV"
