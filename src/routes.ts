import { Router } from "express";
import spent from "./app/routes/spent";

const routes = Router();

routes.use("/spent", spent);

export default routes;
