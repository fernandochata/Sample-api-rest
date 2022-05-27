import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    price: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        trim: true
    },
    image: {
        public_id: String,
        secure_url: String
    }
},
{
    timestamps: true,
    // activa dos propiedades por defecto
    // createdAt: a date representing when this document was created
    // updatedAt: a date representing when this document was last updated
    
    versionKey: false
    // desactiva versionado de los documentos 
    // "__v": 0
    
});


export default mongoose.model('Product', productSchema);