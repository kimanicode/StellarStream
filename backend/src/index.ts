import express, { Express, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import { v2Router, swaggerSpec } from './api/index.js';

const app: Express = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

// Health check (root level)
app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'StellarStream Backend is running' });
});

// V2 API routes
app.use('/api/v2', v2Router);

// Interactive API docs
app.use('/api/v2/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Raw OpenAPI spec (useful for codegen tools)
app.get('/api/v2/docs.json', (_req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📖 API docs available at http://localhost:${PORT}/api/v2/docs`);
});

export default app;
