const requestNewApiKey = {
    tags: ["Client API KEY"],
    summary: "Request a new API key",
    description: "Generate and request a new API key for the authenticated client",
    responses: {
      200: {
        description: "API key requested successfully",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                status: {
                  type: "boolean",
                  example: true
                },
                apiKey: {
                  type: "string",
                  example: "generated_api_key"
                },
                message: {
                  type: "string",
                  example: "API key requested"
                }
              }
            }
          }
        }
      },
      401: {
        description: "User not authenticated",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                status: {
                  type: "boolean",
                  example: false
                },
                message: {
                  type: "string",
                  example: "User not authenticated"
                }
              }
            }
          }
        }
      },
      400: {
        description: "Bad request",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                status: {
                  type: "boolean",
                  example: false
                },
                message: {
                  type: "string",
                  example: "Bad request"
                }
              }
            }
          }
        }
      }
    }
  };
  
  export default requestNewApiKey;
  