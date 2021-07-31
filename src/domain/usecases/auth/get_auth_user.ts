import { AuthRepository as Repository } from "domain/repositories/auth_repository"

export class GetAuthUserUseCase {
    private _repository: Repository
    constructor(repository: Repository) {
        this._repository = repository
    }
    execute(): Promise<any> {
        return this._repository.getAuthUser()
    }
}
