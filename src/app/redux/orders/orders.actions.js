import { DataOrderRepository as DataRepository } from "data/repositories/order/data_order"
import { FetchOrderUseCase } from "domain/usecases/order/fetch_order"
import { FetchOrdersUseCase } from "domain/usecases/order/fetch_orders"
import { RemoveOrderUseCase } from "domain/usecases/order/remove_order"
import { AddOrderUseCase } from "domain/usecases/order/add_order_usecase"
import { fetchingOrders, fetchingOrderDetail } from "./orders.reducers"
import { EditOrderUseCase } from "domain/usecases/order/edit_order_usecase"
const _repository = new DataRepository()

export function addOrder(item) {
    return function (dispatch) {
        try {
            const usecase = new AddOrderUseCase(_repository)
            usecase.execute(item)
            dispatch(fetchOrders())
        } catch (err) {
            throw err
        }
    }
}

export function editOrder(item) {
    return function (dispatch) {
        try {
            const usecase = new EditOrderUseCase(_repository)
            usecase.execute(item)
            dispatch(fetchOrders())
        } catch (err) {
            throw err
        }
    }
}

export function removeOrder(productIds) {
    return function (dispatch) {
        try {
            const usecase = new RemoveOrderUseCase(_repository)
            usecase.execute(productIds)
            dispatch(fetchOrders())
        } catch (err) {
            throw err
        }
    }
}

export function fetchOrders() {
    return function (dispatch) {
        try {
            const usecase = new FetchOrdersUseCase(_repository)
            const data = usecase.execute()
            dispatch(fetchingOrders(data))
        } catch (err) {
            throw err
        }
    }
}
export function fetchOrder(productId) {
    return function (dispatch) {
        try {
            const usecase = new FetchOrderUseCase(_repository)
            const order = usecase.execute(productId)
            dispatch(fetchingOrderDetail(order))
        } catch (err) {
            throw err
        }
    }
}
