import { useState, useEffect } from 'react'

const UseFetch = (url) => {
    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const fetchResource = async () => {
            try {
                let res = await fetch(url)
                let data = await res.json()
                setData(data)
                setLoading(false)
            } catch (error) {
                setLoading(false)
            }
        }
        fetchResource()
    }, [url])

    return { data, loading }
}

export default UseFetch;