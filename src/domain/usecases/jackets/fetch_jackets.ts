import { JacketsRepository as Repository } from "domain/repositories/jackets_repository"
import { Jackets as Entity } from "domain/entities/jackets"

export class FetchJacketsUseCase {
    private _repository: Repository
    constructor(repository: Repository) {
        this._repository = repository
    }
    async execute(): Promise<Entity[]> {
        return await this._repository.getJackets()
    }
}
