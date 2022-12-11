import express from "express";
//import { authorize } from "../controllers/auth.controller.js";
import requestController from "../controllers/request.controller.js";

const router = express.Router();

router.post("/", requestController.createRequest);
router.get("/", requestController.getRequests);
router.get("/:id", requestController.getRequest);
router.delete("/:id", requestController.deleteRequest);
router.put("/", requestController.updateRequest);

/*
router.post("/", requestController.createRequest);
router.get("/", authorize("admin"), requestController.getRequests);
router.get("/:id", authorize("admin"), requestController.getRequest);
router.delete("/:id", authorize("admin"), requestController.deleteRequest);
router.put("/", authorize("admin"), requestController.updateRequest);
*/

export default router;