import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createProduct } from '@/store/features/product/productSlice';

const ProductAdmin = () => {
  const dispatch = useDispatch()

  const categories = useSelector(state => state.product.categories)

  const handleAddProduct = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    let product = Object.fromEntries(formData);

    dispatch(createProduct({id: uuidv4(), ...product}))
  }

  return (
      <div className="container">
        <form className='form' onSubmit={handleAddProduct}>
            <div className='form__item'>
                <label htmlFor="categoryId">Categories</label>
                
                <select name="categoryId" id="categoryId">
                    {
                      categories && categories.map(item => <option value={item.id} key={item.id}> {item.name} </option>)
                    }
                </select>
            </div>
            <div className='form__item'>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' id='name'/>
            </div>
            <div className='form__item'>
                <label htmlFor="price">Price</label>
                <input type="text" name='price' id='price'/>
            </div>
            <div className='form__item'>
                <label htmlFor="image">Image</label>
                <input type="text" name='image' id='image'/>
            </div>

            <button type='submit'>ADD PRODUCT</button>
        </form>
      </div>
  )
}

export default ProductAdmin