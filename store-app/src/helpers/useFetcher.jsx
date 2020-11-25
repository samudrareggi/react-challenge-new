import { useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'

function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data)
        dispatch({
          type: 'FETCH_PRODUCTS',
          payload: data
        })
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return [data, loading, setData]
}

export default useFetch