// functions/app.mjs
import express from 'express';            // Import Express
import serverless from 'serverless-http'; // Import serverless-http
import transactionRoutes from '../src/routes/transactionRoutes.mjs'; // Import routes
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import path from 'path';

// Read the Swagger JSON document
const swaggerDocument = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'swagger-output.json'), 'utf-8'));

const app = express();

// Setup Swagger UI for API documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Middleware to parse JSON requests
app.use(express.json());

// Use transaction routes under the `/api` path
app.use('/api', transactionRoutes);

// Health check route or root endpoint
app.get('/', (req, res) => {
  res.send('Hello world!');
});

api.use('/.netlify/functions/', transactionRoutes);
export const handler = serverless(app);
