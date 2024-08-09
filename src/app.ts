import express from "express";
import dotenv from "dotenv";
import path from "path";
import morgan from "morgan";
dotenv.config({ path: path.join(__dirname, "../.env") });
import cors from "cors";
import routes from "./routes";
import connectMongoDB from "./services/databases/mongodb.service";
import swagger_specs from "./services/swagger-documentation/swagger.config";
import swaggerUi from 'swagger-ui-express';



const app = express();
class App {
  constructor() {
    this.server_configurations();
    this.databaseConnection();
    this.swagger_documentation();
    app.use(express.static(path.join(__dirname, 'public')));
  }

  private server_configurations(): void {
    app.use(express.json({ limit: "25mb" }));
    app.use(express.urlencoded({ limit: "25mb", extended: false }));
    app.use(cors());
    app.use(morgan("dev"));
    app.use("/uploads/avatar/", express.static(path.join(__dirname, "../uploads/avatar")));
  }

  private async databaseConnection() {
    await connectMongoDB();
  }

  private async swagger_documentation() {
    app.use(routes);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger_specs))
  }
}
new App();
export default app;
