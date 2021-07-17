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
        const listOfOrders: Entity[] = []
        const orders = this._fetchStorage()
        if (orders) {
            orders.forEach((order: any) => {
                listOfOrders.push(Entity.fromJSON(order))
            })
        }
        return listOfOrders
    }

    getOrderDetail(productId: string): Entity {
        const orders = this._fetchStorage()
        const found = orders.find((order: any) => order.productId === productId)
        if (found) {
            return Entity.fromJSON(found)
        }
        return new Entity()
    }

    setOrder(item: Entity): Entity {
        const orders = this._fetchStorage()
        if (orders) {
            const found = orders.find((order: any) => order.productId === item.productId)
            if (found) {
                found.qty += item.qty
                found.price = found.qty * item.rate
            } else {
                orders.push(item.toJSON())
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
