import React, { use, useContext } from 'react'
import { Navbar } from './components/Navbar';
import { Card } from './components/Card';
import { MyCart } from './components/MyCart';
import { MyStore } from './context/Mycontext';


export const App = () => {

  let {toogle, products} = useContext(MyStore)
  
  


  return (
    <div className='min-h-screen w-full flex flex-col gap-10' >
      <Navbar />

      <div className="  cards flex flex-wrap gap-9 h-[100%] w-[100%] p-10 ">
        {
          products.map((elem) => <Card elem={elem} key={elem.id} />)
        }

      </div>
      {
        toogle ? <MyCart /> : null 
      }





    </div>
  )
}
export default App;
