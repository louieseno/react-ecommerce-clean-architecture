import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { fetchFAQ } from "app/redux/faq/faq.actions"
import { RootState } from "app/boot"

export function controller() {
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(() => {
        dispatch(fetchFAQ())
    }, [dispatch])

    const data = useSelector((state: RootState) => state.faq.data)
    const loading = useSelector((state: RootState) => state.faq.loading)

    function navigateLink(category: any, key: string) {
        history.push("/faq/details", {
            category: category.key,
            answer: category.answers[key],
            question: category.questions[key],
        })
    }

    return { data, loading, navigateLink }
}
