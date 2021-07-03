import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchReturnPolicy } from "app/redux/return-policies/policies.actions"
import { RootState } from "app/boot"
export function contoller() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchReturnPolicy())
    }, [dispatch])

    const data = useSelector((state: RootState) => state.policies.data)
    const loading = useSelector((state: RootState) => state.policies.loading)

    return { data, loading }
}
