import express from "express"
import app from "../app.js"
import produtos from "./ProdutosRoutes.js"
import marcas from "./MarcasRoutes.js"

const routes = (app)=>{
    app.route('/').get((req,res)=>{
        res.status(200).send({titulo: "Bem vindo ao Sistema"})
    })


app.use(
    express.json(),
    produtos,
    marcas
)}

export default routes