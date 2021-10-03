import { storage } from "./firebase";

const uploadAndGetURL = (file, path, onStateChanged) => {
    return new Promise(function (resolve, reject) {
        var uploadTask = storage.ref().child(path).put(file);

        let previousProgress = 0;

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = snapshot.bytesTransferred / snapshot.totalBytes;
                onStateChanged(progress - previousProgress)
                previousProgress = progress
            },
            (error) => {
                reject(error)
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    resolve(downloadURL);
                });
            }
        );
    })
}

export default uploadAndGetURL;