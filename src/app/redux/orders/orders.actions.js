import { DataOrderRepository as DataRepository } from "data/repositories/order/data_order"
import { FetchOrderUseCase } from "domain/usecases/order/fetch_order"
import { FetchOrdersUseCase } from "domain/usecases/order/fetch_orders"
import { RemoveOrderUseCase } from "domain/usecases/order/remove_order"
import { SetOrderUseCase } from "domain/usecases/order/set_order_usecase"
import { fetchingOrders, fetchingOrderDetail } from "./orders.reducers"
const _repository = new DataRepository()

export function setOrder(item) {
    return function (dispatch) {
        const usecase = new SetOrderUseCase(_repository)
        usecase.execute(item)
        dispatch(fetchOrders())
    }
}

export function removeOrder(productIds) {
    return function (dispatch) {
        const usecase = new RemoveOrderUseCase(_repository)
        usecase.execute(productIds)
        dispatch(fetchOrders())
    }
}

export function fetchOrders() {
    return function (dispatch) {
        const usecase = new FetchOrdersUseCase(_repository)
        const data = usecase.execute()
        dispatch(fetchingOrders(data))
    }
}
export function fetchOrder(productId) {
    return function (dispatch) {
        const usecase = new FetchOrderUseCase(_repository)
        const order = usecase.execute(productId)
        dispatch(fetchingOrderDetail(order))
    }
}
