import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementProductCart, incrementProductCart } from '@/store/features/product/productSlice'

const Cart = () => {
  const [promo, setPromo] = useState([
    {
      id: "1",
      name: "promo2024",
      sale: 10
    },
    {
      id: "2",
      name: "sale20percent",
      sale: 20
    }
  ])

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("")

  const [salePrice, setSalePrice] = useState(0)

  const data = useSelector(state => state.product.carts);

  const decrementCountProduct = (productId) => {
    dispatch(decrementProductCart(productId));
  }

  const incrementCountProduct = (productId) => {
    dispatch(incrementProductCart(productId));
  }

  let sum = data.reduce((acc, current) => {
    return acc += (current.price * current.count)
  }, 0);

  const handleGetSale = (sum) => {
    const foundSale = promo.find(item => item.name === inputValue)

    if(foundSale) {
      setSalePrice(sum - (sum * (foundSale.sale / 100)))
    }else {
      setSalePrice(sum)
    }
  }

  return (
    <div className="container">
      <h2>Cart</h2>

      <div>

        {
          data && data.map(item => (
            <div className="product" key={item.id}>
              <img src={item.image} className='product__image' />

              <div className='product__info'>
                <h1>{item.name}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, illo</p>
                <span>{(item.price * item.count).toFixed(2)}$</span>

                <div className='product__count'>
                  <button onClick={() => decrementCountProduct(item.id)}>-</button>
                  <input type="text" value={item.count} disabled readOnly />
                  <button onClick={() => incrementCountProduct(item.id)}>+</button>
                </div>
              </div>
            </div>
          ))
        }

      </div>

      <div>
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/> 
          <button onClick={() => handleGetSale(sum)}>Get Sale</button>
          <h2>Sum: {sum.toFixed(2)}$</h2>
          <h2>Result: {salePrice.toFixed(2)}$</h2>
      </div>
    </div>
  )
}

export default Cart