import React, { useContext } from 'react'
import { Card } from './Card'
import { MyStore } from '../context/Mycontext'
import { Cartcards } from './Cartcards';

export const MyCart = () => {
    



    let {setToogle} = useContext(MyStore);
    let {cartData} = useContext(MyStore)
    
    return (
        <div
            className='w-400  bg-zinc-200 absolute h-200 left-10 top-10 '
        >
            <div className="contans flex p-10 justify-between">
                <h1 className='text-4xl'>My Cart </h1>


                <button 
                onClick={() => setToogle(prev => !prev)}
                 className='text-4xl hover:scale-96 cursor-pointer hover:bg-amber-50 rounded-2xl p-2'>X</button>

            </div>
            <div className="datas p-10 flex gap-3 flex-wrap">



                

                {
                    cartData.map((elem) => <Cartcards elem={elem}/>)
                }
            </div>


        </div>
    )
}
