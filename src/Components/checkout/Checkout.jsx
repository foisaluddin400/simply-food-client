import React, { useContext } from 'react'
import { AuthContext } from '../Authcontext/AuthPriver';

export const Checkout = () => {
    const{user}=useContext(AuthContext)
    const handleCheckout = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        
        const details = form.details.value;
        const phone = form.phone.value;
        

        const order = {name, details, phone, }
        console.log(order);

        fetch('http://localhost:5000/checked',{
            method:'POST',
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=> {console.log(data)})
    }
  return (
    <div>
        <div>
        <div className="w-[45%] m-auto border-4 border-green-500 mt-10 bg-zinc-100">
            <div className="p-2 text-center bg-green-500 text-white">
                <h2>Checkout System</h2>
            </div>
            <div className="p-8 w-[80%] m-auto items-center">
                
                <div>
                    <div className="text-center mt-[50px] mb-10]">
                        <h2 className="text-xl">Checkout</h2>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <form onSubmit={handleCheckout} className="mt-8">
                        <label className="text-gray-500" htmlFor="name">User Name</label>
                        <input className="w-[100%] p-1 bg-white" type="text" name="name" defaultValue={user ?.displayName} id="name" required />
                        <label className="mt-7 text-gray-500" htmlFor="email">Email</label>
                        <input className="w-[100%] p-1 bg-white" type="email" name="email" defaultValue={user ?.email} id="email" required/>
                        <label className="text-gray-500" htmlFor="phone">Contact No.</label>
                        <input className="w-[100%] p-1 bg-white" type="text" name="phone" id="phone" required/>
                        <label className="text-gray-500" htmlFor="details">Details</label>
                        <input className="w-[100%] p-1 bg-white" type="text" name="details" id="details" required/>
                        <input className="mt-8 bg-green-500 text-center text-white p-2 w-[100%]" type="submit" value="Order" />
                    </form>


                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
