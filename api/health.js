// CanzaTrade Health Check for Vercel
export default function handler(req, res) {
  res.status(200).json({
    status: 'healthy',
    service: 'CanzaTrade',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
}
