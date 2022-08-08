import "reflect-metadata";
import express from "express";
import SwaggerUi from "swagger-ui-express";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

import "./database";
import "./shared/container";

const app = express();

app.use(express.json());
app.use(router);
app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(swaggerFile));

app.listen(3333);
