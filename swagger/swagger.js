const swaggerJSDoc = require('swagger-jsdoc')

// Swagger JSDoc configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Test Bouhella',
      version: '1.0.0',
      description: 'Tuto Swagger API Documentation',
    },
  },
  apis: ['./routers/*.js'], 
}

// Initialize Swagger JSDoc
const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports =  swaggerSpec;
