import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

export default globalRouter;