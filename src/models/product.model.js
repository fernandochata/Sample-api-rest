import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
{
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }, rut: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength: 10,
        maxlength: 10,
        validate: {
            validator: function (value) {
                return /^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( value )
            },
            message: '{VALUE} is not a valid rut'
        }
    }, price: {
            type: Number,
            default: 0
    }, stock: {
            type: Number,
            default: 0
    }, description: {
            type: String,
            trim: true
    }, email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            lowercase: true,
            validate: {
                validator: function(mail) {
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
                },
                message: 'Ingrese un e-mail válido'
            }
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