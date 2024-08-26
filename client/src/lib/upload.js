import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

async function upload (file) {
    const date = new Date()
    const storageRef = ref(storage, `images/${date + file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    return new Promise((resolve, reject) => {
        uploadTask.on(
            "state_changed",
            _,
            (error) => {
                reject("Something went wrong! " + error.code);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL);
                });
            }
        );
    });
}

export default upload;

// To use:
// const imgUrl = await upload(file);
// 
// Then set avatar of user to the imgUrl
