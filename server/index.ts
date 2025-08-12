import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import demoRoutes from './routes/demo';
import chatRoutes from './routes/chat';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables
dotenv.config();

// ES module equivalent of __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true }));

  // Routes
  app.use('/api/demo', demoRoutes);
  app.use('/api', chatRoutes);

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ 
      status: 'healthy', 
      timestamp: new Date().toISOString(),
      services: {
        chat: 'active',
        demo: 'active'
      }
    });
  });

  // Error handling middleware
  app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error('Server Error:', err);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
    });
  });

  // 404 handler
  app.use('*', (req, res) => {
    res.status(404).json({
      success: false,
      error: 'Not found',
      message: `Route ${req.originalUrl} not found`
    });
  });

  return app;
}

// Check if this module is being run directly
const isMainModule = import.meta.url === `file://${process.argv[1]}`;

if (isMainModule) {
  const app = createServer();
  const port = process.env.PORT || 3001;
  
  app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
    console.log(`🤖 Chat API available at http://localhost:${port}/api/chat`);
    console.log(`📊 Health check at http://localhost:${port}/api/health`);
    
    if (process.env.OPENAI_API_KEY) {
      console.log('✅ OpenAI API configured');
    } else {
      console.log('⚠️  OpenAI API not configured - using fallback responses');
    }
    
    if (process.env.DEVELOPER_WEBHOOK_URL || process.env.DEVELOPER_EMAIL) {
      console.log('✅ Developer notifications configured');
    } else {
      console.log('⚠️  Developer notifications not configured');
    }
  });
}

export default createServer();
