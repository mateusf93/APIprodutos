import marcas from "../models/Marca.js";


export default class MarcasController{

    static async listarMarcas(req,res){
        try{
        const todosAsMarcas = await marcas.find()
        return res.status(200).json(todosAsMarcas)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    static async listarMarcaPorId(req,res){
        try{
            const id = req.params.id
            const marca = await marcas.findById(id)
            return res.status(200).json(marca)
        }catch(error){
            return res.status(400).send(error.message)
        }
    }
    static async inserirMarca(req,res){
        try{
            let marca = await new marcas(req.body)
            marca.save((err)=>{
                if(!err){
                    res.status(201).send(marca.toJSON())
                }else{
                    res.status(500).send("erro ao inserir produto")
                }
            })
        }catch(erro){
            res.status(500).send(erro.message)
        }
    }
    static async atualizaMarca(req,res){
    try{
        const id = req.params.id
        await marcas.findByIdAndUpdate(id, {$set:req.body})
        res.status(200).send("Produto Atualizado com sucesso")
    }catch(error){
        res.status(200).send(error.message)
    }
   }
   static async excluirMarca(req,res){
    try{
        const id = req.params.id
        await marcas.findByIdAndDelete(id, {$set:req.body})
        res.status(200).send("Produto Atualizado com sucesso")
    }catch(error){
        res.status(200).send(error.message)
    }
}
    static async inserirMarcas(req,res){
       const options = { ordered: true };
       const marcasInseridas = req.body
       const listadeMarcas = await marcas.insertMany(marcasInseridas, options)
       res.status(200).send(listadeMarcas)
    }
}