import { useState, useEffect } from 'react'

const UseFetch = (url) => {
    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(false);

    useEffect(() => {
        const fetchResource = async () => {
            try {
                let res = await fetch(url)
                let data = await res.json()
                if (data.error === "Invalid API Key" || data.error === "Object Not Found" || data.error === "Error in URL Format" || data.error === "Filter Error" ) {
                    setError(true);
                } else {
                    setError(false);
                }
                setData(data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        }
        fetchResource()
    }, [url])

    return { data, loading, error }
}

export default UseFetch;