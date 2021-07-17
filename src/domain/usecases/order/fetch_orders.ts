import { OrderRepository as Repository } from "domain/repositories/order_repository"
import { Order as Entity } from "domain/entities/order"

export class FetchOrdersUseCase {
    private _repository: Repository
    constructor(repository: Repository) {
        this._repository = repository
    }
    async execute(): Promise<Entity[]> {
        return await this._repository.getOrders()
    }
}
