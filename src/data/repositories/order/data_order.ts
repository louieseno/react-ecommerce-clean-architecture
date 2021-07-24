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

    addOrder(item: Entity): void {
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
        return
    }

    editOrder(item: Entity): void {
        const orders = this._fetchStorage()
        if (orders) {
            const found = orders.find((order: any) => order.productId === item.productId)
            if (found) {
                found.qty = item.qty
                found.price = found.qty * item.rate
            }
            localStorage.setItem(_orderKey, JSON.stringify(orders))
        }
        return
    }

    removeOrder(productIds: string[]): void {
        const orders = this._fetchStorage()
        if (orders) {
            productIds.forEach((id: any) => {
                const index = orders.findIndex((order: any) => order.productId === id)
                if (index !== -1) {
                    console.log(index)
                    orders.splice(index, 1)
                }
            })

            localStorage.setItem(_orderKey, JSON.stringify(orders))
        }
        return
    }
}
