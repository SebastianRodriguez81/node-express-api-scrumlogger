import { LogItem } from '../models/LogItem.js'

const crearLogItem = async (req,res) => {
    try {
        // creamos el logiItem
        let logItem = new LogItem(req.body)

        // lo salvamos
        await logItem.save()

        // enviamos el logItem como respuesta
        res.send(logItem)
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al crear LogItem')
    }
}

const obtenerLogItems = async (req,res) => {
    try {
        // obtenemos el array de items
        const logItems = await LogItem.find()

        // enviamos los logItems como respuesta
        res.json(logItems)
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al obtener LogItems')
    }
}

const obtenerLogItem = async (req,res) => {
    try {
        // obtenemos el LogItem
        const logItem = await LogItem.findById(req.params.id)

        // chequeamos q exista el LogItem
        if(!logItem) {
            res.status(404).send.json({ msg: 'LogItem inexistente'})
        }

        // enviamos el LogItem como respuesta
        res.json(logItem)
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al obtener LogItem')
    }
}

const actualizarLogItem = async (req,res) => {
    try {
        const { ayer, hoy } = req.body
        let logItem = await LogItem.findById(req.params.id)

        if(!logItem) {
            res.status(404).send.json({ msg: 'LogItem inexistente'})
        }

        logItem.ayer = ayer
        logItem.hoy = hoy
        
        logItem = await LogItem.findOneAndUpdate({ _id: req.params.id }, logItem, { new: true})
        res.json(logItem)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error en la actualización de LogItem')
    }
}

const borrarLogItem = async (req,res) => {
    try {
        const logItem = await LogItem.findById(req.params.id)
        
        if(!logItem) {
            res.status(404).send.json({ msg: 'LogItem inexistente'})
        }

        await LogItem.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'LogItem eliminado con éxito' })
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al intentar borrar LogItem')
    }
}

export {
    crearLogItem,
    actualizarLogItem,
    borrarLogItem,
    obtenerLogItem,
    obtenerLogItems
}



