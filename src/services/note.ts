import { INote } from "../types/INote"
import { connect } from '../libs/mongodb'
import { Note } from '../models/noteModel'



//Regra de negócio, par facilitar na destribuição em camadas

const listagem_cadastro = async () => {
    await connect()
    const result = await Note.find()   //fazendo listagem de tudo dentro da tabela
    return result
}

const get = async (nome: string | number) => {
    if (!nome) {
      throw new Error("Informe o campo nome!")
    }
    
    const note = await Note.findById(nome)
    if (!note) {
        throw new Error("Nenhuma anotação encontrada para o nome informado!")
    }
    
    return note
}

const criar_usuario = async (note: INote ) => {
    if (!note.nome) {
        throw new Error("Informe seu nome completo!")
    }
    if (!note.numero) {
        throw new Error("Informe o telefone para contato !")
    }
    if (!note.email) {
        throw new Error("Informe o campo de email!")
    }
    if (!note.idade) {
        throw new Error("Informe o campo de sua idade!")
    }
    if (!note.dn) {
        throw new Error("Informe a sua data de nascimento!")
    }

    
    await Note.create(note)
    
    return true
  
}

const update = async (note: INote) => {
    
    if (!note.nome) {
        throw new Error("Informe o campo nome!")
    }
  
    if (!note.numero) {
        throw new Error("Informe o campo numero!")
    }
    if (!note.email) {
        throw new Error("Informe o campo email!")
    }
    
  
    const noteFound = await Note.findByIdAndUpdate(note.nome, note) // metodos utilizado no mongoose
  
    if (!noteFound) {
      throw new Error("Nenhuma anotação encontrada para o nome informado!")
    }
    
    return true
}

const remove = async (numero: number) => {
    if (!numero) {
        throw new Error("Informe o campo nome para remover contato!")
    }
  
    const note = await Note.findByIdAndRemove(numero)
    if (!note) {
        throw new Error("Nenhuma anotação encontrada para o numero informado!")
    }
    
    return true
}

export {
    listagem_cadastro,
    get,
    criar_usuario,
    update,
    remove
}
