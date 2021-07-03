import { useHistory } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchJackets } from "app/redux/jackets/jackets.actions"
import { fetchDresses } from "app/redux/dress/dress.actions"
import { RootState } from "app/boot"

export function controller() {
    const dispatch = useDispatch()
    const history = useHistory()

    const [category, setCategory] = useState("jackets")
    const [products, setProducts] = useState([])

    const jackets = useSelector((state: RootState) => state.jackets.data)
    const dresses = useSelector((state: RootState) => state.dresses.data)
    const loadingJacket = useSelector((state: RootState) => state.jackets.loading)
    const loadingDress = useSelector((state: RootState) => state.dresses.loading)

    useEffect(() => {
        dispatch(fetchJackets())
    }, [dispatch])

    useEffect(() => {
        if (category === "jackets") {
            setProducts(jackets)
        } else {
            setProducts(dresses)
        }
    }, [jackets, dresses])

    function onChangeCategory(category: string) {
        setCategory(category)
        if (category === "jackets") {
            dispatch(fetchJackets())
        } else {
            dispatch(fetchDresses())
        }
    }

    function onNavigate(product: any) {
        history.push({
            pathname: `products/${product.key}`,
            state: { category: category },
        })
    }

    const loadingState = () => {
        if (!loadingDress && !loadingJacket) {
            return false
        }
        return true
    }

    return { category, products, onChangeCategory, onNavigate, loadingState }
}
