import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/store/features/product/productSlice';

const Products = () => {
    const dispatch = useDispatch();
    const { categoryId } = useParams();

    const {products} = useSelector(state => state.product)


    const filterProducts = categoryId ? products.filter(item => item.categoryId === categoryId) : products;

    return (
        <>
            {
                filterProducts && filterProducts.map(product => (
                    <div className="item" key={product.id}>
                        <img src={product.image} alt="" />
                        <h2><Link to={`/product/${product.id}`}>{product.name}</Link></h2>
                        <span>{product.price} $</span>
                    </div>
                ))
            }
        </>
    )
}

export default Products