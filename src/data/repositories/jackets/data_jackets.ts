import firebase from "firebase/app"
import "firebase/firestore"
import { Jackets as Entity } from "domain/entities/jackets"
import { JacketsRepository as Repository } from "domain/repositories/jackets_repository"
import { loadImages } from "utils/fetch_image"

function _mapSnapshotToEntities(snapshot: any) {
    const entities: Entity[] = []
    snapshot.forEach(function (doc: any) {
        const data = doc.data()
        entities.push(Entity.fromJSON({ key: doc.id, ...data }))
    })
    return entities
}

export class DataJacketsRepository implements Repository {
    async getJackets(): Promise<Entity[]> {
        try {
            const db = firebase.firestore()
            const snapshot = await db.collection("jacketsCollection").get()
            const jackets = _mapSnapshotToEntities(snapshot.docs)
            for (const jacket of jackets) {
                const url = await loadImages("Jackets", jacket.filePath)
                jacket.setImageUrl(url)
            }
            return jackets
        } catch (e) {
            console.log(e)
            throw e
        }
    }
}
