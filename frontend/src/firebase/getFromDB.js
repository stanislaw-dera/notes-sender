import { firestore } from "./firebase";

const getFromDB = (id) => {
    return new Promise(function (resolve, reject) {

        var docRef = firestore.collection("sets").doc(id);

        docRef.get().then(doc => {
            if (doc.exists) {
                resolve(doc.data());
            } else {
                reject('Not found')
            }
        
        }).catch((error) => {
            reject(error);
        });
    })
}

export default getFromDB;