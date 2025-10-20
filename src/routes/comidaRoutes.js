import { Router } from "express";
import * as ComidaController from '../controllers/comidaController.js';

const router = Router();

router.get('/', ComidaController.listarTodos);
router.get('/:id', ComidaController.listarUm);

export default router