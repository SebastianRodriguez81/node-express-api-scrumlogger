import express from 'express'
import { crearLogItem,
    actualizarLogItem,
    borrarLogItem,
    obtenerLogItem,
    obtenerLogItems } from '../controllers/logItemController.js' 

const router = express.Router()

// api/logitems
router.post('/', crearLogItem)
router.get('/', obtenerLogItems)
router.put('/:id', actualizarLogItem)
router.get('/:id', obtenerLogItem)
router.delete('/:id', borrarLogItem)

export {
    router as routes 
}