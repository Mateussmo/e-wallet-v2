import { Router } from "express";
import AuthMiddleware from "../middlewares/auth";
import UserController from "../controllers/UserController";

const routes = Router();

routes.post("/", UserController.store);

export default routes;
