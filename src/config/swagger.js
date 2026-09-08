import swaggerJSDoc from "swagger-jsdoc";

const options = {
  failOnErrors: true,
  definition: {
    openapi: "3.1.0",

    info: {
      title: "MediPrice Cameroon API",
      version: "1.0.0",
      description:
        "Price-transparency API for MediPrice Cameroon. Search a medication, lab test, " +
        "or care service and compare prices across pharmacies, laboratories, and hospitals " +
        "in Bamenda. Every price carries a trust badge (`seed_verified`, `provider_verified`, " +
        "or `community_reported`) and a last-updated date.\n\n" +
        "Every endpoint returns the standard response envelope: " +
        "`{ success: boolean, data: any, message: string }`.\n\n" +
        "Most of the API is public and requires no authentication. Auth exists only as " +
        "scaffolding for the upcoming community price-reporting feature.",
      contact: {
        name: "Fadidev Studio",
      },
    },

    servers: [
      {
        url: `http://localhost:${process.env.PORT || 5000}`,
        description: "Local development server",
      },
    ],

    tags: [
      {
        name: "Health",
        description: "Service liveness check",
      },
      {
        name: "Medications",
        description: "Search, browse, and compare medication prices",
      },
      {
        name: "Services",
        description: "Search, browse, and compare lab test and care service prices",
      },
      {
        name: "Providers",
        description: "Pharmacies, laboratories, and hospitals that offer priced items",
      },
      {
        name: "Compare",
        description: "Side-by-side price comparison across multiple items",
      },
      {
        name: "Price",
        description: "Community price submissions (auth required)",
      },
      {
        name: "Authentication",
        description: "Account registration and login — scaffolding for community price reporting",
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        Medication: {
          type: "object",
          properties: {
            _id: { type: "string", example: "665f1a2b3c4d5e6f7a8b9c0d" },
            name: { type: "string", example: "Paracetamol" },
            genericName: { type: "string", example: "Acetaminophen" },
            category: { type: "string", example: "Pain relief" },
            description: { type: "string" },
            createdAt: { type: "string", format: "date-time" },
            updatedAt: { type: "string", format: "date-time" },
          },
        },
        Service: {
          type: "object",
          properties: {
            _id: { type: "string" },
            name: { type: "string", example: "Malaria test" },
            type: { type: "string", enum: ["lab", "care"] },
            category: { type: "string" },
            description: { type: "string" },
            createdAt: { type: "string", format: "date-time" },
            updatedAt: { type: "string", format: "date-time" },
          },
        },
        Provider: {
          type: "object",
          properties: {
            _id: { type: "string" },
            name: { type: "string", example: "Mezam Polyclinic Pharmacy" },
            type: { type: "string", enum: ["pharmacy", "lab", "hospital"] },
            quarter: { type: "string" },
            address: { type: "string" },
            city: { type: "string", example: "Bamenda" },
            location: {
              type: "object",
              properties: {
                lat: { type: "number" },
                lng: { type: "number" },
              },
            },
            phone: { type: "string" },
            createdAt: { type: "string", format: "date-time" },
            updatedAt: { type: "string", format: "date-time" },
          },
        },
        Price: {
          type: "object",
          properties: {
            _id: { type: "string" },
            itemType: { type: "string", enum: ["medication", "service"] },
            itemId: { type: "string" },
            providerId: {
              oneOf: [
                { type: "string" },
                { $ref: "#/components/schemas/Provider" },
              ],
            },
            amount: { type: "integer", description: "Amount in FCFA", example: 1500 },
            trustBadge: {
              type: "string",
              enum: ["seed_verified", "provider_verified", "community_reported", "unverified"],
            },
            reportedBy: { type: "string", nullable: true },
            createdAt: { type: "string", format: "date-time" },
            updatedAt: { type: "string", format: "date-time" },
          },
        },
        PaginationMeta: {
          type: "object",
          properties: {
            page: { type: "integer", example: 1 },
            limit: { type: "integer", example: 10 },
            total: { type: "integer", example: 42 },
            totalPages: { type: "integer", example: 5 },
          },
        },
        ErrorResponse: {
          type: "object",
          properties: {
            success: { type: "boolean", example: false },
            data: { nullable: true, example: null },
            message: { type: "string" },
          },
        },
      },
    },
  },

  apis: ["src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
