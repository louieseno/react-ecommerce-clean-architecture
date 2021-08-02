import { AuthRepository as Repository } from "domain/repositories/auth_repository"

export class GetAuthUserUseCase {
    private _repository: Repository
    constructor(repository: Repository) {
        this._repository = repository
    }
    async execute(): Promise<any> {
        return await this._repository.getAuthUser()
    }
}
