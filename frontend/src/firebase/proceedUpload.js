import uploadAndGetURL from "./uploadPromise";
import uniqid from 'uniqid';

const proceedUpload = async (subjects, onProgress) => {

    return new Promise(async function (resolve, reject) {


        const id = uniqid() // generates the id
        let allPhotos = 0
        let uploadedPhotos = 0
        let urls = [] // all the urls of the photos will be stored there

        // count all photos
        for (let subject = 0; subject < subjects.length; subject++) {
            allPhotos += subjects[subject].photos.length
        }

        const calculateProgress = (v) => {
            uploadedPhotos += v
            onProgress(Math.round(uploadedPhotos / allPhotos * 100))
        }

        // upload all photos from each subject
        for (let subject = 0; subject < subjects.length; subject++) {

            urls.push([])

            for (let i = 0; i < subjects[subject].photos.length; i++) {

                const filename = subjects[subject].photos[i].name;

                let response = await fetch(subjects[subject].photos[i].path);
                let data = await response.blob();

                let metadata = {
                    type: subjects[subject].photos[i].type
                };

                let file = new File([data], filename, metadata);

                let link = await uploadAndGetURL(file, `${id}/${filename}`, calculateProgress)

                // update urls set
                urls[subject].push({
                    type: subjects[subject].photos[i].type,
                    id: subjects[subject].photos[i].id,
                    url: link
                })


            }
        }

        // then, update the subjects array so it is ready to be pushed to db
        const newSubjects = refactorSubjects(subjects, urls)
        resolve({subjects: newSubjects, id: id})

    })

}

const refactorSubjects = (subjects, urls) => {

    let newSubjects = []


    for (let i = 0; i < subjects.length; i++) {

        newSubjects[i] = {
            ...subjects[i],
            photos: urls[i]
        }
    }

    return newSubjects
}

export default proceedUpload;