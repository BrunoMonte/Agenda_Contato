import * as dotenv from 'dotenv'

import express from 'express'
import cors from 'cors'
import * as note from './src/controllers/note'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
const port = 3000


app.get('/notes',  note.listagem_cadastro)
app.get('/notes/:id', note.get)
app.post('/notes', note.criar_usuario)
app.put('/notes', note.update)
app.delete('/notes', note.remove)



app.listen(port, () => {
  console.log(`⚡️ API rodando em http://localhost:${port}`)
})
