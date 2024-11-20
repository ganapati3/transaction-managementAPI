import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Transaction Management API',
    description: 'API for managing financial transactions',
  },
  host: process.env.NODE_ENV === 'production' ? 'transaction-managementapi.onrender.com' : 'localhost:3000',
  schemes: [process.env.NODE_ENV === 'production' ? 'https' : 'http'],
};

const outputFile = './swagger-output.json'; 
const endpointsFiles = ['./main.mjs']; 

swaggerAutogen(outputFile, endpointsFiles, doc);
