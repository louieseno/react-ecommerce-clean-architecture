import firebase from "firebase/app"
import "firebase/firestore"
import { ReturnPolicy as Entity } from "domain/entities/return_policy"
import { ReturnPolicyRepository as Repository } from "domain/repositories/return_policy_repository"

function _mapSnapshotToEntities(snapshot: any) {
    const entities: Entity[] = []
    snapshot.forEach(function (doc: any) {
        const data = doc.data()
        const policyArray = []
        for (const key in data) {
            policyArray.push({ key: key, policy: data[key] })
        }
        policyArray.sort((a, b) => a.key.localeCompare(b.key))
        entities.push(Entity.fromJSON({ key: doc.id, policy: policyArray }))
    })
    return entities
}

export class DataReturnPolicyRepository implements Repository {
    async getReturnPolicy(): Promise<Entity[]> {
        try {
            const db = firebase.firestore()
            const snapshot = await db.collection("policyCollection").get()
            return _mapSnapshotToEntities(snapshot.docs)
        } catch (e) {
            console.log(e)
            throw e
        }
    }
}
