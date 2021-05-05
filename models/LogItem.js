import mongoose from 'mongoose'

const LogItemSchema = mongoose.Schema({
    ayer: {
        type: String,
        required: true
    },
    hoy: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now()
    }    
})

//module.exports = mongoose.model('LogItem', LogItemSchema)
//export default mongoose.model('LogItem', LogItemSchema) 
const LogItem = mongoose.model('LogItem', LogItemSchema)
export {
    LogItem
}



