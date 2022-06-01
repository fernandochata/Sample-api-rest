import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
{
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }, price: {
            type: Number,
            default: 0
    }, stock: {
            type: Number,
            default: 0
    }, description: {
            type: String,
            trim: true
    }
},
{
    /**
     * * Activa dos propiedades por defecto
     * createdAt: fecha en que se creó el documento
     * updatedAt: fecha en que se actualizó por última vez el documento
     */
    timestamps: true,
    
    /**
     * * Desactiva versionado de los documentos
     * "__v": 0
     */
    versionKey: false
    
});


export default mongoose.model('Product', productSchema);