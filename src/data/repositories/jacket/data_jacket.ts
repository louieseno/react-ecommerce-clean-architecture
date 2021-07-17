import firebase from "firebase/app"
import "firebase/firestore"
import { Jacket as Entity } from "domain/entities/jacket"
import { JacketRepository as Repository } from "domain/repositories/jacket_repository"
import { loadImages } from "utils/fetch_image"

function _mapSnapshotToEntity(doc: any) {
    const data = doc.data()
    const entity = Entity.fromJSON({ key: doc.id, ...data })
    return entity
}

function _mapSnapshotToEntities(snapshot: any) {
    const entities: Entity[] = []
    snapshot.forEach(function (doc: any) {
        entities.push(_mapSnapshotToEntity(doc))
    })
    return entities
}

export class DataJacketRepository implements Repository {
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
            throw e
        }
    }

    async getJacket(productId: string): Promise<Entity> {
        try {
            const db = firebase.firestore()
            const document = await db.collection("jacketsCollection").doc(productId).get()
            const jacket = _mapSnapshotToEntity(document)
            const url = await loadImages("Jackets", jacket.filePath)
            jacket.setImageUrl(url)
            return jacket
        } catch (e) {
            throw e
        }
    }
}
