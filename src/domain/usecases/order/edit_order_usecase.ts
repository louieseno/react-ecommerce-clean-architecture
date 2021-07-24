import { OrderRepository as Repository } from "domain/repositories/order_repository"
import { Order as Entity } from "domain/entities/order"

export class EditOrderUseCase {
    private _repository: Repository
    constructor(repository: Repository) {
        this._repository = repository
    }
    execute(item: Entity): void {
        return this._repository.editOrder(item)
    }
}
