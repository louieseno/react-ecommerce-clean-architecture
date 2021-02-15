import firebase from "firebase/app"
import "firebase/firestore"
import { FaqRepository as Repository } from "domain/repositories/faq_repository"

function _mapSnapshotToEntities(snapshot: any) {
    const entities: any[] = []
    snapshot.forEach(function (doc: any) {
        const data = doc.data()
        entities.push({ key: doc.id, ...data })
        //entities.push(Entity.fromJSON({ key: doc.id, ...data }))
    })
    return entities
}

export class DataFaqRepository implements Repository {
    async getFAQ(): Promise<any> {
        try {
            console.log("tawag")
            const db = firebase.firestore()
            const snapshot = await db.collection("faqCollection").get()

            console.log(_mapSnapshotToEntities(snapshot.docs))
        } catch (e) {
            console.log(e)
        }

        // return _mapSnapshotToEntities(snapshot)
    }
}
