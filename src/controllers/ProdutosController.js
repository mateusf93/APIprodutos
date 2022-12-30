import produtos from "../models/Produtos.js";


export default class ProdutoController{

    static async listarProdutos(req,res){
        produtos.find().populate('Marca').exec((err, produtos) => {
                if (!err) {
                    res.status(200).json(produtos);
                }
            })
        
    }
    static async listarProdutosPorId(req,res){
          const id = req.params.id
          produtos.findById(id).populate('Marca').exec((err,produtos)=>{
            if(err){
                res.status(500)
            }else{
          res.status(200).json(produtos)}
        })
    }
    static async inserirProduto(req,res){
        try{
            let produto = new produtos(req.body)
            produto.save((err)=>{
                if(!err){
                    res.status(201).send(produto.toJSON())
                }else{
                    res.status(500).send("erro ao inserir produto")
                }
            })
        }catch(erro){
            res.status(500).send(erro.message)
        }
    }
    static async atualizaProduto(req,res){
    try{
        const id = req.params.id
        await produtos.findByIdAndUpdate(id, {$set:req.body})
        res.status(200).send("Produto Atualizado com sucesso")
    }catch(error){
        res.status(200).send(error.message)
    }
   }
   static async excluirProduto(req,res){
    try{
        const id = req.params.id
        await produtos.findByIdAndDelete(id, {$set:req.body})
        res.status(200).send("Produto excluído com sucesso")
    }catch(error){
        res.status(200).send(error.message)
    }
}
    static async inserirProdutos(req,res){
       const options = { ordered: true };
       const produtosInseridos = req.body
       const listadeProdutos = await produtos.insertMany(produtosInseridos, options)
       res.status(200).send(listadeProdutos)
    }
}