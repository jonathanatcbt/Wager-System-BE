const requestPasswordReset = {
    tags: ["Client Auth"],
    summary: "Request password reset",
    description: "Request a password reset link via email",
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
                        }
                    },
                    required: ["client_email"]
                }
            }
        }
    },
    responses: {
        200: {
            description: "Password reset email sent",
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
                                example: "Password reset email sent"
                            }
                        }
                    }
                }
            }
        },
        400: {
            description: "Email not found",
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
                                example: "Email not found"
                            }
                        }
                    }
                }
            }
        },
        403: {
            description: "Missing email",
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
                                example: "Missing email"
                            }
                        }
                    }
                }
            }
        }
    }
};

const resetPassword = {
    tags: ["Client Auth"],
    summary: "Reset password",
    description: "Reset the password using the reset token",
    requestBody: {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        token: {
                            type: "string",
                            description: "Password reset token",
                            example: "reset_token_example"
                        },
                        newPassword: {
                            type: "string",
                            description: "New password",
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
            description: "Password reset successful",
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
                                example: "Password reset successful"
                            }
                        }
                    }
                }
            }
        },
        400: {
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
        403: {
            description: "Missing token or new password",
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
                                example: "Missing token or new password"
                            }
                        }
                    }
                }
            }
        }
    }
};

export { requestPasswordReset, resetPassword };
