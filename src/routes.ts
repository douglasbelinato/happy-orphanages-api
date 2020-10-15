import { Router } from "express";
import OrphanagesController from "./controllers/OrphanagesController";

const routes = Router();

// Resouce name patterns most common for controllers in node / typescript:
// index, show, create, update, delete
routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.show);
routes.post("/orphanages", OrphanagesController.create);

export default routes;
