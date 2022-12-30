import mongoose from "mongoose";

const marcaSchema = new mongoose.Schema(
    {   
    _id:{type: mongoose.Schema.Types.ObjectId, required: true, auto: true},
    Marca:{type : String, required:true}
})

const marcas = mongoose.model('Marcas', marcaSchema)

export default marcas