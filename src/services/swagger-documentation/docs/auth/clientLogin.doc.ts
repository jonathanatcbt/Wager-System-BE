const login = {
    tags: ["Client Auth"],
    summary: "Login an API client",
    description: "Login an API client and get a JWT token",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              client_email: {
                type: "string",
                description: "Client's email",
                example: "john.doe@example.com"
              },
              password: {
                type: "string",
                description: "Client's password",
                example: "password123"
              }
            },
            required: ["client_email", "password"]
          }
        }
      }
    },
    responses: {
      200: {
        description: "Login successful",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                status: {
                  type: "boolean",
                  example: true
                },
                message: {
                  type: "string",
                  example: "Login successful"
                },
                token: {
                  type: "string",
                  example: "your_jwt_token"
                }
              }
            }
          }
        }
      },
      400: {
        description: "Invalid email or password",
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
                  example: "Invalid email or password"
                }
              }
            }
          }
        }
      },
      403: {
        description: "Missing email or password",
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
                  example: "Missing email or password"
                }
              }
            }
          }
        }
      }
    }
  };
  
  export default login;
  