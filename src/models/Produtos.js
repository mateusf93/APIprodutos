import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(
    {   
    _id:{type: mongoose.Schema.Types.ObjectId, required: true, auto: true},
    SKU:{type : Number, required:true},
    DescProduto:{type : String, required:true},
    Marca:{type: mongoose.Schema.Types.ObjectId, ref: 'Marcas', required: true},
    Categoria:{type : String}
}

)

const produtos = mongoose.model('Produtos', produtoSchema)

export default produtos