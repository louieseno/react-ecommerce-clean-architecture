export interface AuthRepository {
    signIn(values: any): Promise<void>
    signUp(values: any): Promise<void>
    signOut(): Promise<void>
    getAuthUser(): Promise<any>
}
