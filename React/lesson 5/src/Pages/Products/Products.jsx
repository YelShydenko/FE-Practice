import React from 'react'
import { useParams } from 'react-router'

const Products = () => {
    const { categoryId } = useParams();

    return (
        <div>Category {categoryId}</div>
    )
}

export default Products