// hooks
import useFetch from "../hooks/useFetch"
import ProductsService from "../services/productsService";

function ProductsPage() {

    // fetch
    const { data, isLoading } = useFetch();

    // function
    // function handleAddProduct() {
    //     ProductsService.addProduct()
    //         .then((res) => console.log(res))
    //         .catch((err) => console.log(err))
    // }

    return (
        <div>
            {
                isLoading
                ?
                    (<>
                    {data.map((el, i) => {
                        return <div key={i}>{el.title}</div>
                    })}
                    </>)
                :
                    (<h2>Loading...</h2>)
            }

            {/* Add Product
            <button onClick={handleAddProduct}>Add Product</button> */}
        </div>
    )
}

export default ProductsPage