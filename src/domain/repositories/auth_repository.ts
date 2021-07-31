export interface AuthRepository {
    signIn(values: any): Promise<any>
    signUp(values: any): Promise<any>
    signOut(): Promise<void>
    getAuthUser(): any
}
