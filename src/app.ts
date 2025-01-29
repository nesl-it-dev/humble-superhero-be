import express, { Application } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import debug from "debug";
import cors from "cors";

import superHeroRoutes from "./routes/superhero_route";
import {
  DEV_DOMAIN,
  DEV_ENVIRONMENT,
  DEV_PORT,
} from "./constants/dev_constants";

//Load environment variables (load .env file depending on environment)
const env = process.env.NODE_ENV || DEV_ENVIRONMENT;
dotenv.config({ path: `.env.${env}` });

const app: Application = express();
const port = process.env.PORT || DEV_PORT;
const domain = process.env.DOMAIN || DEV_DOMAIN;
const debugLog = debug("app:startup");

//Middlewares
app.use(express.json()); //body-parser
app.use(cors());

//Logging for debugging
if (env === DEV_ENVIRONMENT) {
  app.use(morgan("dev"));
  debugLog("Morgan enabled for development environment.");
} else {
  debugLog("Running in production mode.");
}

//Routes
app.use("/superheroes", superHeroRoutes);

//Start server
app.listen(port, () => {
  console.log(`Server is running on http://${domain}:${port}`);
  debugLog(`Server started on http://${domain}:${port}`);
});

export default app;
