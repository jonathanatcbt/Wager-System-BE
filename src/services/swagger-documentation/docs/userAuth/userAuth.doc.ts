export const registerNewUser = {
    tags: ["User Auth"],
    summary: "Register a new user",
    description: "Register a new user with email, username, and password",
    requestBody: {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        username: {
                            type: "string",
                            example: "johndoe"
                        },
                        password: {
                            type: "string",
                            example: "password123"
                        },
                        user_email: {
                            type: "string",
                            example: "johndoe@example.com"
                        }
                    },
                    required: ["username", "password", "user_email"]
                }
            }
        }
    },
    responses: {
        200: {
            description: "User registered successfully",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            status: {
                                type: "boolean",
                                example: true
                            },
                            token: {
                                type: "string",
                                example: "jwt_token"
                            },
                            message: {
                                type: "string",
                                example: "User registered successfully"
                            }
                        }
                    }
                }
            }
        },
        403: {
            description: "User registration failed",
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
                                example: "Username already exists"
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
export const loginUser = {
    tags: ["User Auth"],
    summary: "Login a user",
    description: "Login a user with username and password",
    requestBody: {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        username: {
                            type: "string",
                            example: "johndoe"
                        },
                        password: {
                            type: "string",
                            example: "password123"
                        }
                    },
                    required: ["username", "password"]
                }
            }
        }
    },
    responses: {
        200: {
            description: "User logged in successfully",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            status: {
                                type: "boolean",
                                example: true
                            },
                            token: {
                                type: "string",
                                example: "jwt_token"
                            },
                            message: {
                                type: "string",
                                example: "Logged in successfully"
                            }
                        }
                    }
                }
            }
        },
        403: {
            description: "Invalid username or password",
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
                                example: "Invalid username or password"
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

export const requestResetPassword = {
    tags: ["User Auth"],
    summary: "Request a password reset",
    description: "Request a password reset for a user",
    requestBody: {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        username: {
                            type: "string",
                            example: "johndoe"
                        },
                        user_email: {
                            type: "string",
                            example: "johndoe@example.com"
                        }
                    },
                    required: ["username", "user_email"]
                }
            }
        }
    },
    responses: {
        200: {
            description: "Recovery email sent",
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
                                example: "Recovery email sent"
                            }
                        }
                    }
                }
            }
        },
        403: {
            description: "Invalid username or email",
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
                                example: "Invalid username or email"
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

export const resetUserPassword = {
    tags: ["User Auth"],
    summary: "Reset user password",
    description: "Reset the password for a user using a token",
    requestBody: {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        token: {
                            type: "string",
                            example: "reset_token"
                        },
                        newPassword: {
                            type: "string",
                            example: "newpassword123"
                        }
                    },
                    required: ["token", "newPassword"]
                }
            }
        }
    },
    responses: {
        200: {
            description: "Password updated successfully",
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
                                example: "Password updated successfully"
                            }
                        }
                    }
                }
            }
        },
        403: {
            description: "Invalid or expired token",
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
                                example: "Invalid or expired token"
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

export const updatePassword = {
    tags: ["User Auth"],
    summary: "Reset user password",
    description: "Reset the password for a user using a token",
    requestBody: {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        user_email: {
                            type: "string",
                            example: "abc@example.com"
                        },
                        password: {
                            type: "string",
                            example: "newpassword123"
                        }
                    },
                    required: ["user_email", "password"]
                }
            }
        }
    },
    responses: {
        200: {
            description: "Password changed successfully",
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
                                example: "Password changed successfully"
                            }
                        }
                    }
                }
            }
        },
        403: {
            description: "Invalid email address",
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
                                example: "Invalid email address"
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

export const sendOTP = {
    tags: ["User Auth"],
    summary: "Send OTP",
    description: "Send OTP on user mail and us it to reset password",
    requestBody: {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        user_email: {
                            type: "string",
                            example: "abc@gmail.com"
                        }
                    },
                    required: ["user_email"]
                }
            }
        }
    },
    responses: {
        200: {
            description: "OTP Sent successfully",
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
                                example: "OTP Sent successfully"
                            }
                        }
                    }
                }
            }
        },
        403: {
            description: "Invalid email address",
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
                                example: "Invalid email address"
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

export const verifyOTP = {
    tags: ["User Auth"],
    summary: "Verify OTP",
    description: "Verify OTP",
    requestBody: {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        user_email: {
                            type: "string",
                            example: "adc@gmail.com"
                        },
                        otp: {
                            type: "string",
                            example: "1234"
                        }
                    },
                    required: ["user_email", "otp"]
                }
            }
        }
    },
    responses: {
        200: {
            description: "OTP verified successfully",
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
                                example: "OTP verified successfully"
                            }
                        }
                    }
                }
            }
        },
        403: {
            description: "Invalid or expired OTP or Invalid email address",
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
                                example: "Invalid or expired OTP or Invalid email address"
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
export const getUserDetailsByUserName= {
    tags: ["User Auth"],
    "summary": "Get user details by username",
    "description": "Fetches the user details for a user with the given username.",
    "parameters": [
      {
        "in": "path",
        "name": "userName",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "The username of the user whose details are to be fetched."
      }
    ],
    "responses": {
      "200": {
        "description": "User fetched successfully",
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "properties": {
                "status": {
                  "type": "boolean"
                },
                "user": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "_id": {
                        "type": "string"
                      },
                      "user_email": {
                        "type": "string"
                      },
                      "username": {
                        "type": "string"
                      },
                      "wallet_balance": {
                        "type": "number"
                      },
                      "avatar_id": {
                        "type": "string"
                      },
                      "createdAt": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "updatedAt": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "avatarData": {
                        "type": "object",
                        "properties": {
                          "avatar_url": {
                            "type": "string"
                          }
                        }
                      }
                    }
                  }
                },
                "message": {
                  "type": "string"
                }
              },
              "example": {
                "status": true,
                "user": [
                  {
                    "_id": "668bd44747b194e5d61b1dbf",
                    "user_email": "umeir366@hotmail.com.pk",
                    "username": "Muhammad Umar mayo",
                    "wallet_balance": 0,
                    "avatar_id": "668d20367cf61698bbca9d5f",
                    "createdAt": "2024-07-08T11:57:59.508Z",
                    "updatedAt": "2024-07-08T11:57:59.509Z",
                    "avatarData": {
                      "avatar_url": "http://localhost:4010/uploads/avatar/1720524854122-xrp-test.png"
                    }
                  }
                ],
                "message": "User fetched successfully"
              }
            }
          }
        }
      },
      "400": {
        "description": "Bad Request",
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "properties": {
                "status": {
                  "type": "boolean"
                },
                "message": {
                  "type": "string"
                }
              },
              "examples": {
                "MissingUsername": {
                  "summary": "Missing username",
                  "value": {
                    "status": false,
                    "message": "Missing username"
                  }
                },
                "ErrorFetchingUser": {
                  "summary": "Error fetching user",
                  "value": {
                    "status": false,
                    "message": "Error in get user api"
                  }
                }
              }
            }
          }
        }
      }
    }
}