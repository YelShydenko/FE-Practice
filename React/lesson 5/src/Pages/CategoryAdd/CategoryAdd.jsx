import React from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createCategory } from '@/store/features/product/productSlice';

const CategoryAdd = () => {
  const dispatch = useDispatch()

    const handleAddCategory = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
    
        let category = Object.fromEntries(formData)

        dispatch(createCategory({id: uuidv4(), ...category}))
    }

  return (
    <div className='container'>
           <form className='form' onSubmit={handleAddCategory}>
            <div className='form__item'>
                <label htmlFor="name">Category Name</label>
                <input type="text" name='name' id='name'/>
            </div>

            <button type='submit'>ADD CATEGORY</button>
        </form>
    </div>
  )
}

export default CategoryAdd