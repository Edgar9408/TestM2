import { Router } from "express";
const router = Router();

import { createPublication, getPublications, getOnePublication, deletePublication, updatePublication } from '../controllers/publications-controller'

router.post("/",createPublication);
router.get("/",getPublications);
router.get("/:id", getOnePublication);
router.delete("/:id", deletePublication);
router.put("/:id", updatePublication);

export default router;
