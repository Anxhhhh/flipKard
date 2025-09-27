import React, { useContext } from 'react'
import { MyStore } from '../context/Mycontext'

export const Card = ({elem}) => {


    let {setCartData, cartData, setProducts, products} = useContext(MyStore)
    let handleDelete = (id)=> {
        setProducts(products.filter((elem)=> elem.id !== id))
    }
    

    return (
        <div
            className='h-[40%] w-[18%]   border '
        >
            <div className="image w-[100%] p-2  ">
                <img src={elem.image} alt="" />
            </div>  
            <div className="detail p-2">
                <h1 className='text-xl font-bold  '>Title ~ {elem.title}</h1>
                <h1 className='text-xl font-bold  '>Price ~ ${elem.price}</h1>
            </div>
            <div className="buttons flex justify-between p-2">
                <button className='bg-blue-500 p-2 text-xl rounded-md cursor-pointer hover:scale-96 '
               onClick={() => setCartData(prev=> [...prev, elem])}
                >Add to Cart</button>
                <button
             className='bg-red-500 p-2 text-xl rounded-md cursor-pointer hover:scale-96 '
             onClick={() => handleDelete(elem.id)}>Delete</button>
            </div>
        </div>
    )
}
