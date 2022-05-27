import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'fernandochata',
    api_key: '592169551642885',
    api_secret: 'fRU2d_pVo3FO90MFl1ido9Cn6Rc',
    secure: true
});

export async function uploadImage(filePath, fileName) {
    return await cloudinary.uploader.upload(filePath, {
            public_id: fileName,
            overwrite: true
        });
    };

export async function deleteImage(public_id) {
    return await cloudinary.uploader.destroy(public_id);
};
