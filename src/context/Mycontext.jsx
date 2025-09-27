import React, { createContext, useState } from 'react'

export let MyStore = createContext();

export const Mycontext = ({children}) => {


  const [products, setProducts] = useState([
  {
    "id": 1,
    "name": "Essence Mascara",
    "title": "Essence Mascara Lash Princess",
    "price": 9.99,
    "image": "https://images.unsplash.com/photo-1758621518225-9248e65dbaee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
  },
  {
    "id": 2,
    "name": "Innisfree Face Wash",
    "title": "Innisfree Green Tea Face Wash",
    "price": 19.99,
    "image": "https://images.unsplash.com/photo-1758654307553-f067f0367f13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
  },
  {
    "id": 3,
    "name": "JBL Charge 4",
    "title": "Bluetooth Speaker JBL Charge 4",
    "price": 99.99,
    "image": "https://images.unsplash.com/photo-1758613655882-d38d9bd2db94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 4,
    "name": "MacBook Air 13",
    "title": "Apple MacBook Air 13” M2",
    "price": 999.99,
    "image": "https://plus.unsplash.com/premium_photo-1734549547939-41f90fdf91cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 5,
    "name": "Galaxy S21 Ultra",
    "title": "Samsung Galaxy S21 Ultra",
    "price": 849.99,
    "image": "https://images.unsplash.com/photo-1758640920711-8ad5dbcb5214?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 6,
    "name": "Nike Revolution 5",
    "title": "Nike Revolution 5 Men’s Shoes",
    "price": 49.99,
    "image": "https://images.unsplash.com/photo-1758640920711-8ad5dbcb5214?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 7,
    "name": "Annibale bed",
    "title": "Annibale Colombo Bed",
    "price": 1899.99,
    "image": "https://images.unsplash.com/photo-1742410938424-109762e50b55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 8,
    "name": "HP ENVY Laptop",
    "title": "HP ENVY Laptop 15",
    "price": 1150.00,
    "image": "https://images.unsplash.com/photo-1755918909925-f62b86d93c2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 9,
    "name": "DELL Inspiron 15",
    "title": "DELL Inspiron 15",
    "price": 999.00,
    "image": "https://plus.unsplash.com/premium_photo-1670793631007-e86c6ddfd812?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "id": 10,
    "name": "AirPods Max",
    "title": "Apple AirPods Max Silver",
    "price": 549.99,
    "image": "https://images.unsplash.com/photo-1755784826728-9805b5fb1fef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D"
  }
]
);
  const [cartData, setCartData] = useState([]);


  const [toogle, setToogle] = useState(false);
 
  return (

    <MyStore.Provider value={{ setToogle, toogle, products, cartData, setCartData, setProducts}}>
      {children}
    </MyStore.Provider>
  )
}
