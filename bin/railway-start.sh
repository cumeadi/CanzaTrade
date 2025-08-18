#!/bin/sh

# Railway Startup Script for CanzaTrade
# This script starts both the health check server and the main application

echo "🚀 Starting CanzaTrade on Railway..."

# Ensure the data directory exists
mkdir -p /app/data

# Run database migrations
echo "📊 Running database migrations..."
/app/node_modules/prisma/build/index.js migrate deploy --schema /app/packages/prisma/src/schema.prisma

# Run the seed script
echo "🌱 Seeding database..."
node /app/packages/prisma/seed.mjs

# Start the health check server in the background
echo "🏥 Starting health check server..."
cd /app/app
node dist/health.mjs &
HEALTH_PID=$!

# Start the main application
echo "💼 Starting main CanzaTrade application..."
node dist/standalone.mjs &
MAIN_PID=$!

# Function to handle shutdown
shutdown() {
    echo "🛑 Shutting down CanzaTrade..."
    kill $HEALTH_PID 2>/dev/null
    kill $MAIN_PID 2>/dev/null
    wait $HEALTH_PID 2>/dev/null
    wait $MAIN_PID 2>/dev/null
    echo "✅ Shutdown complete"
    exit 0
}

# Set up signal handlers
trap shutdown SIGTERM SIGINT

# Wait for either process to exit
wait $HEALTH_PID $MAIN_PID

# If we get here, one of the processes has exited
echo "⚠️  One of the processes has exited, shutting down..."
shutdown
