import mongoose  from 'mongoose'

//criação de campos para banco

const noteSchema = new mongoose.Schema({
    
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

const Note = mongoose.model('notes', noteSchema)

export { Note }