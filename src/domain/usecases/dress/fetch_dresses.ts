import { DresssRepository as Repository } from "domain/repositories/dress_repository"
import { Dress as Entity } from "domain/entities/dress"

export class FetchDressesUseCase {
    private _repository: Repository
    constructor(repository: Repository) {
        this._repository = repository
    }
    async execute(): Promise<Entity[]> {
        return await this._repository.getDresses()
    }
}
