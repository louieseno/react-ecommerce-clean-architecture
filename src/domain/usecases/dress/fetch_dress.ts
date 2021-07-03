import { DresssRepository as Repository } from "domain/repositories/dress_repository"
import { Dress as Entity } from "domain/entities/dress"

export class FetchDressUseCase {
    private _repository: Repository
    constructor(repository: Repository) {
        this._repository = repository
    }
    async execute(productId: string): Promise<Entity> {
        return await this._repository.getDress(productId)
    }
}
