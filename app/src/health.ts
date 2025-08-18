/**
 * Health Check Endpoint for Railway
 * This file provides a simple health check that Railway can use to monitor the application
 */

import { createServer } from 'http';
import { logger } from '@canzatrade/logger';

interface HealthResponse {
  status: 'ok' | 'error';
  timestamp: string;
  uptime: number;
  version: string;
  environment: string;
}

function createHealthServer(port: number = 3000) {
  const server = createServer((req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
      res.writeHead(200);
      res.end();
      return;
    }

    if (req.url === '/health' && req.method === 'GET') {
      const healthData: HealthResponse = {
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        version: process.env.npm_package_version || '1.0.0',
        environment: process.env.NODE_ENV || 'development'
      };

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(healthData, null, 2));
      
      logger.debug('Health check requested', { healthData });
    } else if (req.url === '/' && req.method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('CanzaTrade is running! Use /health for health status.');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  });

  server.listen(port, () => {
    logger.info(`Health check server started on port ${port}`);
  });

  return server;
}

// Export for use in other parts of the application
export { createHealthServer };

// If this file is run directly, start the health server
if (import.meta.url === `file://${process.argv[1]}`) {
  const port = parseInt(process.env.PORT || '3000', 10);
  createHealthServer(port);
}
