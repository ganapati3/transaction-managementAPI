import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Transaction Management API',
    description: 'API for managing financial transactions',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json'; // Output JSON file
const endpointsFiles = ['./main.mjs']; // Entry point for routes

swaggerAutogen(outputFile, endpointsFiles, doc);
