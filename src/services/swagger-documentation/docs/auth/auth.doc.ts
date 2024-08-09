const signup = {
    tags: ["Client Auth"],
    summary: "Sign up a new API client",
    description: "Register a new API client with email and phone confirmation",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              client_name: {
                type: "string",
                description: "Client's name",
                example: "John Doe"
              },
              client_email: {
                type: "string",
                description: "Client's email",
                example: "john.doe@example.com"
              },
              client_phone: {
                type: "string",
                description: "Client's phone number",
                example: "+1234567890"
              },
              password: {
                type: "string",
                description: "Client's password",
                example: "password123"
              }
            },
            required: ["client_name", "client_email", "client_phone", "password"]
          }
        }
      }
    },
    responses: {
      200: {
        description: "Successfully signed up",
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
                  example: "Successfully signed up"
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
      },
      403: {
        description: "Missing client name, email, or phone",
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
                  example: "Missing client name, email, or phone"
                }
              }
            }
          }
        }
      }
    }
  };
  
  export default signup;
  