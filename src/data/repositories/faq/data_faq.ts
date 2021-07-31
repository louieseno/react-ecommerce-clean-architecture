import firebase from "firebase/app"
import "firebase/firestore"
import { FAQ as Entity } from "domain/entities/faq"
import { FaqRepository as Repository } from "domain/repositories/faq_repository"

function _mapSnapshotToEntities(snapshot: any) {
    const entities: Entity[] = []
    snapshot.forEach(function (doc: any) {
        const data = doc.data()
        entities.push(Entity.fromJSON({ key: doc.id, ...data }))
    })
    return entities
}

export class DataFaqRepository implements Repository {
    async getFAQ(): Promise<Entity[]> {
        try {
            const db = firebase.firestore()
            const snapshot = await db.collection("faqCollection").get()
            return _mapSnapshotToEntities(snapshot.docs)
        } catch (e) {
            throw e
        }
    }
}
