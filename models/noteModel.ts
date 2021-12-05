import mongoose  from 'mongoose'

//criação de campos para banco

const noteSchema = new mongoose.Schema({
    //tipando os campos - tipos dados do mongoose
    numero: {
        type: Number,
        required: true  // para informar , colocado por obrigação 
    },
    nome: {
        type: String,Number,
        required: true
    },
    email: String
    

})

const Note = mongoose.model('notes', noteSchema) //Nome da tabela de referencia no banco

export { Note }