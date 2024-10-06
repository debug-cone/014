// react
import { useEffect } from "react";
import { useState } from "react"

// products
import ProductsService from '../services/productsService'

function useFetch() {
    // states
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // req
    useEffect(() => {
        ProductsService.getAllProducts()
            .then((res) => {
                setData(res.data.products);
                setIsLoading(true);
            })
            .catch((err) => console.log(err))
    },[])

    return { data, isLoading };
}

export default useFetch