import axios from 'axios'

class ProductsService {
    static getAllProducts = () => axios.get('/products');
    // static addProduct = (body) => axios.post('/products/add', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //         title: 'BMW Pencil',
    //         price: 200
    //     })
    // })
}

export default ProductsService