import { useParams, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchJacket } from "app/redux/jackets/jackets.actions"
import { fetchDress } from "app/redux/dress/dress.actions"
import { RootState } from "app/boot"

export function controller() {
    const dispatch = useDispatch()
    const location: any = useLocation()
    const { id }: any = useParams()
    const [qty, setQty] = useState(1)
    const [product, setProduct] = useState(null)
    const [category, setCategory] = useState("")

    const jacket = useSelector((state: RootState) => state.jackets.jacket)
    const dress = useSelector((state: RootState) => state.dresses.dress)
    const loadingJacket = useSelector((state: RootState) => state.jackets.loading)
    const loadingDress = useSelector((state: RootState) => state.dresses.loading)

    useEffect(() => {
        const _category = location.state.category
        setCategory(_category)
        if (_category === "dresses") {
            dispatch(fetchDress(id))
        } else {
            dispatch(fetchJacket(id))
        }
    }, [location])

    useEffect(() => {
        switch (category) {
            case "dresses":
                if (dress) {
                    setProduct(dress)
                }
                break
            case "jackets":
                if (jacket) {
                    setProduct(jacket)
                }
                break
            default:
                break
        }
    }, [jacket, dress, category])

    const loadingState = () => {
        if (!loadingJacket && !loadingDress) {
            return false
        }
        return true
    }

    function setQuantity(event: any) {
        setQty(parseInt(event.target.value))
    }
    function addQuantity() {
        setQty(qty + 1)
    }
    function minusQuantity() {
        if (qty == 1) {
            return
        }
        setQty(qty - 1)
    }

    return { product, qty, loadingState, setQuantity, addQuantity, minusQuantity }
}
