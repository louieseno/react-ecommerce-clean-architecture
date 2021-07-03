import firebase from "firebase/app"
import "firebase/firestore"
import { Dress as Entity } from "domain/entities/dress"
import { DresssRepository as Repository } from "domain/repositories/dress_repository"
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

export class DataDressRepository implements Repository {
    async getDresses(): Promise<Entity[]> {
        try {
            const db = firebase.firestore()
            const snapshot = await db.collection("dressCollection").get()
            const dresses = _mapSnapshotToEntities(snapshot.docs)
            for (const dress of dresses) {
                const url = await loadImages("Dresses", dress.filePath)
                dress.setImageUrl(url)
            }
            return dresses
        } catch (e) {
            throw e
        }
    }

    async getDress(productId: string): Promise<Entity> {
        try {
            const db = firebase.firestore()
            const document = await db.collection("dressCollection").doc(productId).get()
            const dress = _mapSnapshotToEntity(document)
            const url = await loadImages("Dresses", dress.filePath)
            dress.setImageUrl(url)
            return dress
        } catch (e) {
            throw e
        }
    }
}
