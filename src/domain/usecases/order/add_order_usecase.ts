import { OrderRepository as Repository } from "domain/repositories/order_repository"
import { Order as Entity } from "domain/entities/order"

export class AddOrderUseCase {
    private _repository: Repository
    constructor(repository: Repository) {
        this._repository = repository
    }
    execute(item: Entity): void {
        return this._repository.addOrder(item)
    }
}
