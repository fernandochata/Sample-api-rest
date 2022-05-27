import mongoose from 'mongoose';

const MONGO_URI = 'mongodb+srv://fernando:fernando@cluster.7aaup.mongodb.net/?retryWrites=true&w=majority';

//const MONGO_URI = 'mongodb://localhost:27017/'

export async function connectToDB() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connected to DB');
    } catch (error) {
        console.log(error);
    }
}

