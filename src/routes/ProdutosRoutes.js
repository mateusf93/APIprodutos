import ProdutoController from "../controllers/ProdutosController.js";
import express from "express"

const router = express.Router()

router
    .get("/produtos", ProdutoController.listarProdutos)
    .get("/produtos/:id", ProdutoController.listarProdutosPorId)
    .post("/produtos/varios", ProdutoController.inserirProdutos)
    .post("/produtos", ProdutoController.inserirProduto)
    .put("/produtos/:id", ProdutoController.atualizaProduto)
    .delete("/produtos/:id", ProdutoController.excluirProduto)
export default router