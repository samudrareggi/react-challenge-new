import { useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data)
        if (products.length === 0) {
          dispatch({
            type: 'FETCH_PRODUCTS',
            payload: data
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [dispatch, products.length, url])

  return [data, loading]
}

export default useFetch