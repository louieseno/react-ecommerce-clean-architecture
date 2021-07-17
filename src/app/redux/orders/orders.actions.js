import { DataOrderRepository as DataRepository } from "data/repositories/order/data_order"
import { FetchOrderUseCase } from "domain/usecases/order/fetch_order"
import { FetchOrdersUseCase } from "domain/usecases/order/fetch_orders"
import { SetOrderUseCase } from "domain/usecases/order/set_order_usecase"
import { fetchingOrders, fetchingOrderDetail, settingOrder } from "./orders.reducers"
const _repository = new DataRepository()

export function setOrder(item) {
    return function (dispatch) {
        const usecase = new SetOrderUseCase(_repository)
        const order = usecase.execute(item)
        dispatch(settingOrder(order))
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
