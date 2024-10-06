import React, { useContext } from 'react'
import { AuthContext } from '../Authcontext/AuthPriver'
import { ItemCard } from '../ItemCard/ItemCard'

export const Ourmenu = () => {
    const { card } = useContext(AuthContext)
    return (
        <div className='lg:w-[85%] lg:m-auto'>

                <div className='font-bold text-center text-3xl mt-[70px] mb-[50px]'>
                    <h1>Our Menu Items</h1>
                </div>
            
            <div className='lg:grid lg:grid-cols-4'>
                {
                    card.map((item) => <ItemCard item={item}></ItemCard>)
                }
            </div>
        </div>
    )
}
