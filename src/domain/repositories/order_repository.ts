import { Order as Entity } from "domain/entities/order"

export interface OrderRepository {
    getOrders(): Entity[]
    getOrderDetail(productId: string): Entity
    setOrder(item: Entity): Entity
}
