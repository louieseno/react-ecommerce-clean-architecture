import { Order as Entity } from "domain/entities/order"

export interface OrderRepository {
    getOrders(): Entity[]
    getOrderDetail(productId: string): Entity
    addOrder(item: Entity): void
    editOrder(item: Entity): void
    removeOrder(productIds: string[]): void
}
