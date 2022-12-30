import mongoose from "mongoose";

mongoose.connect("mongodb+srv://mateus:1234@cluster-node.tszyn9i.mongodb.net/Loja");

let db = mongoose.connection;

export default db