import "firebase/firestore"
import firebase from "firebase/app"
import { AuthRepository as Repository } from "domain/repositories/auth_repository"

const _key = "wwwUser"
export class DataAuthRepository implements Repository {
    getAuthUser(): any {
        try {
            const data = localStorage.getItem(_key)
            if (data) {
                return JSON.parse(data)
            }
            return
        } catch (e) {
            console.log(e)
        }
    }
    async signOut(): Promise<void> {
        localStorage.removeItem(_key)
        return await firebase.auth().signOut()
    }
    async signIn(values: any): Promise<any> {
        try {
            const { email, password } = values
            const data = await firebase.auth().signInWithEmailAndPassword(email.trim().toLowerCase(), password)
            console.log(data)
            if (data) {
                const db = firebase.firestore()
                const userName = await (await db.collection("users").doc(data.user?.uid).get()).data()?.userName
                const authUser = { username: userName, uid: data.user?.uid }
                localStorage.setItem(_key, JSON.stringify(authUser))
                return authUser
            }
        } catch (e) {
            console.log(e)
        }
    }

    async signUp(values: any): Promise<any> {
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
                const authUser = { username: userName, uid: data.user?.uid }
                localStorage.setItem(_key, JSON.stringify(authUser))
                return authUser
            }
        } catch (e) {
            console.log(e)
        }
    }
}
