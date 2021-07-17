import { DataOrderRepository as DataRepository } from "data/repositories/order/data_order"
import { FetchOrderUseCase } from "domain/usecases/order/fetch_order"
import { FetchOrdersUseCase } from "domain/usecases/order/fetch_orders"
import { SetOrderUseCase } from "domain/usecases/order/set_order_usecase"
import { request, requestFailed, fetchingOrders, fetchingOrderDetail, settingOrder } from "./orders.reducers"
const _repository = new DataRepository()

export function setOrder(item) {
    return function (dispatch) {
        dispatch(request())
        try {
            const usecase = new SetOrderUseCase(_repository)
            const order = usecase.execute(item)
            dispatch(settingOrder(order))
        } catch (err) {
            dispatch(requestFailed())
        }
    }
}

export function fetchOrders() {
    return function (dispatch) {
        dispatch(request())
        try {
            const usecase = new FetchOrdersUseCase(_repository)
            const orders = usecase.execute()
            dispatch(fetchingOrders(orders))
        } catch (err) {
            dispatch(requestFailed())
        }
    }
}
export function fetchOrder(productId) {
    return function (dispatch) {
        dispatch(request())
        try {
            const usecase = new FetchOrderUseCase(_repository)
            const order = usecase.execute(productId)
            dispatch(fetchingOrderDetail(order))
        } catch (err) {
            dispatch(requestFailed())
        }
    }
}
