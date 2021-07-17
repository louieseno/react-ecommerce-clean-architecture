import { JacketRepository as Repository } from "domain/repositories/jacket_repository"
import { Jacket as Entity } from "domain/entities/jacket"

export class FetchJacketUseCase {
    private _repository: Repository
    constructor(repository: Repository) {
        this._repository = repository
    }
    async execute(productId: string): Promise<Entity> {
        return await this._repository.getJacket(productId)
    }
}
