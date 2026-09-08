// import swaggerJsdoc from "swagger-jsdoc";
import swaggerJSDoc from "swagger-jsdoc";

const options = {
  failOnErrors: true,
  definition: {
    openapi: "3.1.0",

    info: {
      title: "MediPrice Cameroon API",
      version: "1.0.0",
      description:
        "API for searching medications and healthcare services and comparing prices across providers in Bamenda."
    },

    servers: [
      {
        url: "http://localhost:8000",
        description: "Local development server"
      }
    ],

    tags: [
      {
        name: "Medications",
        description: "Medication endpoints"
      },
      {
        name: "Services",
        description: "Healthcare service endpoints"
      },
      {
        name: "Providers",
        description: "Provider endpoints"
      },
      {
        name: "Compare",
        description: "Price comparison endpoints"
      },
      {
        name: "Authentication",
        description: "Authentication endpoints"
      },
      {
        name: "Price",
        description: "Price endpoints"
      }
    ]
  },

  apis: ["../routes/*.js",]
};

const swaggerSpec = swaggerJSDoc(options);

// swagger is not finding my route comments. my swagger file is in the config folder and the config and routes folder are all in the src folder but the path should not be the problem i know how to navigate paths "../routes/*.js"
export default swaggerSpec;