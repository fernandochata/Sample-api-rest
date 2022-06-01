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
     * createdAt: a date representing when this document was created
     * updatedAt: a date representing when this document was last updated
     */
    timestamps: true,
    
    /**
     * * Desactiva versionado de los documentos
     * "__v": 0
     */
    versionKey: false
    
});


export default mongoose.model('Product', productSchema);