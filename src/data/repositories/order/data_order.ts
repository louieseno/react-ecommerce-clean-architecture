import { Order as Entity } from "domain/entities/order"
import { OrderRepository as Repository } from "domain/repositories/order_repository"

const _orderKey = "wwwOrders"

export class DataOrderRepository implements Repository {
    _fetchStorage() {
        const orders = localStorage.getItem(_orderKey)
        if (orders) {
            const parseOrders = JSON.parse(orders)
            return parseOrders
        }
        return
    }

    getOrders(): Entity[] {
        const orders = this._fetchStorage()
        return []
    }

    getOrderDetail(productId: string): Entity {
        this._fetchStorage()
        return new Entity()
    }

    setOrder(item: Entity): Entity {
        const orders = this._fetchStorage()
        if (orders) {
            const found = orders.find((order: any) => order.productId === item.productId)
            if (found) {
                found.qty += item.qty
                found.price += found.qty * item.rate
            }
            localStorage.setItem(_orderKey, JSON.stringify(orders))
        } else {
            const orders = []
            orders.push(item.toJSON())
            localStorage.setItem(_orderKey, JSON.stringify(orders))
        }
        return this.getOrderDetail(item.productId)
    }
}
