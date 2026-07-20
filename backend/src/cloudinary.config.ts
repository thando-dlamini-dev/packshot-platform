import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
})

const uploadFile = async (imgFile: string, folder: string) => {
    try{
        const result = await cloudinary.uploader.upload( imgFile, {
            folder//portfolio/deliverables
        });

        console.log('Upload successful!');
        console.log('Secure URL:', result.secure_url);
        console.log('Public ID:', result.public_id);

        return result;
    }
    catch(error){
        console.error("Upload failed: ", error);
    }
}

export default uploadFile;