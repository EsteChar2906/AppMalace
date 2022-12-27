import { Router } from 'express';
import { createPrendas } from '../controllers/prendas.controllers';
const router = Router();

router.post("/crearPrendas", createPrendas);

export default router;