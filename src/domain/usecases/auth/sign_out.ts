import { AuthRepository as Repository } from "domain/repositories/auth_repository"

export class SignOutUseCase {
    private _repository: Repository
    constructor(repository: Repository) {
        this._repository = repository
    }
    async execute(): Promise<void> {
        return await this._repository.signOut()
    }
}
