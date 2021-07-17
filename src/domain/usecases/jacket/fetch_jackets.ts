import { JacketRepository as Repository } from "domain/repositories/jacket_repository"
import { Jacket as Entity } from "domain/entities/jacket"

export class FetchJacketsUseCase {
    private _repository: Repository
    constructor(repository: Repository) {
        this._repository = repository
    }
    async execute(): Promise<Entity[]> {
        return await this._repository.getJackets()
    }
}
