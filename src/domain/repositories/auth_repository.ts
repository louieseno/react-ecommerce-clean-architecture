export interface AuthRepository {
    signUp(values: any): Promise<any>
    signOut(): Promise<void>
    getAuthUser(): any
}
