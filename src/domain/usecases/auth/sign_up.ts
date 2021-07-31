import { AuthRepository as Repository } from "domain/repositories/auth_repository"

export class SignUpUseCase {
    private _repository: Repository
    constructor(repository: Repository) {
        this._repository = repository
    }
    async execute(values: any): Promise<any> {
        return await this._repository.signUp(values)
    }
}
