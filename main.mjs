import express from "express";
import transactionRoutes from './src/routes/transactionRoutes.mjs'
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger-output.json' assert { type: 'json' };


const app = express();
const port = process.env.PORT || 3000;

// const swaggerOptions = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Transaction Management API",
//       version: "1.0.0",
//       description: "API for managing financial transactions",
//     },
//     servers: [{ url: "http://localhost:3000" }],
//   },
//   apis: ["./src/routes/*.mjs" ], // Adjust the path to your route/controller files
// };

// const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(express.json());
app.use('/api', transactionRoutes);



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
