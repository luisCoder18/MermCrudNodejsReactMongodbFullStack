import mongosse from 'mongoose';

export const connectDB = async () =>{
    try {
        await mongosse.connect('mongodb://localhost/merndb');
        console.log(">>> DB esta Conectada")
    } catch (error) {
        console.log(error);
    }
};
