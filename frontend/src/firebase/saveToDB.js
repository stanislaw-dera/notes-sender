import { firestore } from "./firebase";

const saveToDB = (data) => {
    return new Promise(function (resolve, reject) {
        firestore.collection('sets').doc(data.id).set({subjects: data.subjects}).then(() => {
            resolve(data.id)
        }).catch(err => {
            reject(err)
        })
    })
}

export default saveToDB;