import express from 'express'
import { conectarDB } from './config/db.js' 
import cors from 'cors'
import { routes } from './routes/logItem.js'

// creación del servidor
const app = express()

// conectando a la base de datos
conectarDB()

app.use(cors())

app.use(express.json())

app.use('/api/logitems', routes)

app.set('port', process.env.PORT || 4000)


// servidor escuchando
app.listen(app.get('port'), () => {
    console.log(`Servidor escuchando en puerto ${app.get('port')}...`)
})
