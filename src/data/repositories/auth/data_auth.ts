import "firebase/firestore"
import firebase from "firebase/app"
import { AuthRepository as Repository } from "domain/repositories/auth_repository"

export class DataAuthRepository implements Repository {
    async getAuthUser(): Promise<any> {
        try {
            const db = firebase.firestore()
            const current = firebase.auth().currentUser
            if (current) {
                const user = await db.collection("users").doc(current.uid).get()
                const username = user.get("userName")
                return { uid: current.uid, username }
            }
            return
        } catch (err) {
            throw err
        }
    }
    async signOut(): Promise<void> {
        return await firebase.auth().signOut()
    }
    async signIn(values: any): Promise<void> {
        try {
            const { email, password } = values
            await firebase.auth().signInWithEmailAndPassword(email.trim().toLowerCase(), password)
        } catch (err) {
            throw err
        }
    }

    async signUp(values: any): Promise<void> {
        try {
            const { userName, email, password } = values
            const data = await firebase.auth().createUserWithEmailAndPassword(email.trim().toLowerCase(), password)
            if (data) {
                const db = firebase.firestore()
                await db.collection("users").doc(data.user?.uid).set(
                    {
                        userName,
                    },
                    { merge: true },
                )
            }
        } catch (err) {
            throw err
        }
    }
}
