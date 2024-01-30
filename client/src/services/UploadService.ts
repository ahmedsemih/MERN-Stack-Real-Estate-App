class UploadService {
    private static cloudinaryUrl = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/upload`;
    private static uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;

    public static async uploadImage (image: File){
        const formData = new FormData();

        formData.append('upload_preset', this.uploadPreset);
        formData.append('file', image);

        return fetch(this.cloudinaryUrl, { method: 'POST', body: formData})
        .then(res => res.json())
        .then(data => data)
        .catch(error => error);
    }
}

export default UploadService;