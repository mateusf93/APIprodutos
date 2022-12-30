import MarcasController from "../controllers/MarcasController.js";
import express from "express"

const router = express.Router()

router
    .get("/marcas", MarcasController.listarMarcas)
    .get("/marcas/:id", MarcasController.listarMarcaPorId)
    .post("/marcas/varios", MarcasController.inserirMarcas)
    .post("/marcas", MarcasController.inserirMarca)
    .put("/marcas/:id", MarcasController.atualizaMarca)
    
export default router