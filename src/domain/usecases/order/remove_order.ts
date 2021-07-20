import { OrderRepository as Repository } from "domain/repositories/order_repository"

export class RemoveOrderUseCase {
    private _repository: Repository
    constructor(repository: Repository) {
        this._repository = repository
    }
    execute(productIds: string[]): void {
        return this._repository.removeOrder(productIds)
    }
}
