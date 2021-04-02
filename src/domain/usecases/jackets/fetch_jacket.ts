import { JacketsRepository as Repository } from "domain/repositories/jackets_repository"
import { Jackets as Entity } from "domain/entities/jackets"

export class FetchJacketUseCase {
    private _repository: Repository
    constructor(repository: Repository) {
        this._repository = repository
    }
    async execute(productId: string): Promise<Entity> {
        return await this._repository.getJacket(productId)
    }
}
