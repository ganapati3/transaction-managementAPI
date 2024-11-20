import express from "express";
import transactionRoutes from './src/routes/transactionRoutes.mjs'
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from './swagger-output.json' assert { type: 'json' };
import fs from 'fs';
import path from 'path';

const swaggerDocument = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'swagger-output.json'), 'utf-8'));


const app = express();
const port = process.env.PORT;
console.log(process.env.port)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(express.json());
app.use('/api', transactionRoutes);

app.get('/', () => {
    return "Hello world!"
})


app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});
