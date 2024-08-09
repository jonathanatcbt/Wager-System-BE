const createAAvatarDoc = {
    tags: ["avatar"],
    summary: "this api is used t create avatar",
    description: "add a new avatar",
    requestBody: {
        required: true,
        content: {
            "multipart/form-data": {
                schema: {
                    type: "object",
                    properties: {
                        avatar: {
                            type: "string",
                            format: "binary",
                            description: "Upload an image file."
                        },
                        imageLink: {
                            type: "string",
                            format: "uri",
                            description: "Provide a URL to an image."
                        }
                    },
                }

            }
        }
    },
    responses: {
        201: {
            description: "Avatar created successfully",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            status: {
                                type: "boolean"
                            },
                            message: {
                                type: "string"
                            },
                            data: {
                                type: "object",
                                properties: {
                                    avatar_url: {
                                        type: "string",
                                        format: "uri"
                                    },
                                    _id: {
                                        type: "string"
                                    },
                                    createdAt: {
                                        type: "string",
                                        format: "date-time"
                                    },
                                    updatedAt: {
                                        type: "string",
                                        format: "date-time"
                                    },
                                    __v: {
                                        type: "integer"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        ,
        400: {
            description: "Bad request"
        },
        500: {
            description: "Internal Server Error"
        }
    }
}
const getAllAvatars={
    tags: ["avatar"],
    summary: "This API is used to fetch all avatars",
    description: "Retrieve all avatars",
    responses: {
      200: {
        description: "All avatars are fetched",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                status: {
                  type: "boolean"
                },
                message: {
                  type: "string"
                },
                data: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      _id: {
                        type: "string"
                      },
                      avatar_url: {
                        type: "string",
                        format: "uri"
                      },
                      createdAt: {
                        type: "string",
                        format: "date-time"
                      },
                      updatedAt: {
                        type: "string",
                        format: "date-time"
                      },
                      __v: {
                        type: "integer"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      500: {
        description: "Internal Server Error"
      }
    }
  }
  
const updateAvatardoc={
    "summary": "Update user avatar",
    "tags": ["avatar"],
    "parameters": [
      {
        "in": "path",
        "name": "user_id",
        "required": true,
        "schema": {
          "type": "string",
          "example": "60ed994cb7b58f0c0c38b3a1"
        },
        "description": "The ID of the user whose avatar needs to be updated"
      }
    ],
    "requestBody": {
      "required": true,
      "content": {
        "application/json": {
          "schema": {
            "type": "object",
            "properties": {
              "avatar_id": {
                "type": "string",
                "example": "668d20de7cf61698bbca9d61"
              }
            },
            "required": ["avatar_id"]
          }
        }
      }
    },
    "responses": {
      "201": {
        "description": "Avatar updated successfully",
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "properties": {
                "status": {
                  "type": "boolean",
                  "example": true
                },
                "message": {
                  "type": "string",
                  "example": "avatar updated successfully"
                }
              }
            }
          }
        }
      },
      "400": {
        "description": "Bad request. Missing user ID or avatar ID in request",
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "properties": {
                "status": {
                  "type": "boolean",
                  "example": false
                },
                "message": {
                  "type": "string",
                  "example": "User id not found"
                }
              }
            }
          }
        }
      },
      "500": {
        "description": "Internal server error",
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "properties": {
                "status": {
                  "type": "boolean",
                  "example": false
                },
                "message": {
                  "type": "string",
                  "example": "Internal Server Error"
                }
              }
            }
          }
        }
      }
    }
  }
const createAvatr = {
    "/api/avatar/": {
        post: createAAvatarDoc,
        get:getAllAvatars
    }
}
const updateAvatar={
"/api/avatar/{user_id}":{
    patch:updateAvatardoc
}
}
export const avatarDoc={...createAvatr,...updateAvatar,}
