import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addProductToCart, fetchProductsById } from '@/store/features/product/productSlice';

const Product = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { productId } = useParams();

    const [count, setCount] = useState(1);

    const {product, isLoading} = useSelector(state => state.product)

    useEffect(() => {
        dispatch(fetchProductsById(productId));
    }, [productId])

    const incrementCount = () => {
        setCount(prevState => prevState + 1)
    }

    const decrementCount = () => {
        if (count > 1) {
            setCount(prevState => prevState - 1)
        }
    }

    const addToCart = (product) => {
        dispatch(addProductToCart({...product, count}))
    }

    if (!product) return "Loading ..."

    return (
        <div className="container">
            <button onClick={() => navigate(-1)}>Back</button>
            <h2>Product</h2>

            <div className="product">
                <img src={product.image} alt={product.name} className='product__image' />

                <div className='product__info'>
                    <h1>{product.name}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, illo</p>
                    <span>{product.price}$</span>

                    <div className='product__count'>
                        <button onClick={decrementCount}>-</button>
                        <input type="text" value={count} disabled readOnly/>
                        <button onClick={incrementCount}>+</button>
                    </div>
                    <button className='btn btn-bgorange' onClick={() => addToCart(product)}>ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default Product