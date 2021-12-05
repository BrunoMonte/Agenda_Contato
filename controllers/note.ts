import { Request, Response } from 'express'
import * as note from '../services/note'
import { error } from '../libs/bindError'

const list = async (req: Request<any>, res: Response<any>) => {
    try {
        const notes = await note.list()
        return res.json(notes)
    } catch (err: any) {
        return error(res, err)
    }
}

const get = async (req: Request<any>, res: Response<any>) => {
    try {
        const nome = req.params.nome
        
        if(!nome) return res.status(400).json({ message: 'Informe o campo nome!' })    

        const noteFound = await note.get(nome)
        res.json(noteFound)
    } catch (err: any) {
        return error(res, err)
    }

}

const create = async (req: Request<any>, res: Response<any>) => {
    try {
        const nome = req.body.nome
        const numero = req.body.numero
        const email = req.body.email
        
        const noteCreated = await note.create({ nome, numero, email })
        return res.json(noteCreated)
    } catch (err: any) {
        return error(res, err)
    }

  
}

const update = async (req: Request<any>, res: Response<any>) => {
    try {
        const nome = req.body.nome
        const numero = req.body.numero
        
        
        if (nome) {
            return res.status(400).json({ message: 'Informe o campo Nome para alterar contato' })
        }

        const noteUpdated = await note.update({ nome , numero})
        return res.json(noteUpdated)
    } catch (err: any) {
        return error(res, err)
    }

}

const remove = async (req: Request<any>, res: Response<any>) => {
    try {
        const numero = req.body.numero
        
        if (!numero) {
            return res.status(400).json({ message: 'Informe o campo NUMERO, para excluir o contato' })
        }

        await note.remove(numero)
        res.json({ success: true })

    } catch (err: any) {
        return error(res, err)
    }
}

export {
    list,
    get, 
    create,
    update, 
    remove
}