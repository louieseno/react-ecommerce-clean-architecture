import "firebase/firestore"
import firebase from "firebase/app"

const _fetchImages = async (folder, file) => {
    const url = await firebase.app().storage().ref(folder).child(file).getDownloadURL()
    return url
}

export const loadImages = async (folder, file) => {
    const url = await _fetchImages(folder, file)
    return url
}
