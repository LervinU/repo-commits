import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (URL) => {
    const [isLoading, setLoading] = useState();
    const [successResponse, setSuccessResponse] = useState();
    const [failureResponse, setFailureResponse] = useState();

    useEffect(() => {
        setLoading(true);
        axios(URL)
        .then(res => {
            setLoading(false);
            setSuccessResponse(res.data)
        })
        .catch(error => {
            setLoading(false);
            setFailureResponse(error)
        })
    }, []);
    
    return { isLoading, successResponse, failureResponse };
}

export default useFetch;