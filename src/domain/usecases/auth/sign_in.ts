import { AuthRepository as Repository } from "domain/repositories/auth_repository"

export class SignInUseCase {
    private _repository: Repository
    constructor(repository: Repository) {
        this._repository = repository
    }
    async execute(values: any): Promise<void> {
        return await this._repository.signIn(values)
    }
}
