import React, { useContext } from 'react'
import { AuthContext } from '../Authcontext/AuthPriver';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {
    const{signInUser ,googleSingIn} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        

        signInUser(email, password)
        .then(result=>{

            // const userEmail = {email};
            console.log(result.user);
            navigate('/')

            // client site step-1 jwt 

            // axios.post('http://localhost:5000/jwt',userEmail,{
            //     withCredentials: true
            // })
            // .then(res=>{
            //     console.log(res.data);

            // })
        })
        .catch(error=>{
            console.error(error)
        })

    }

    const handleGoogle=()=>{
        googleSingIn()
        .then(result=>{
            console.log(result.user);
            navigate('/')
            alert('login Successfully')
        })
        .catch(error=>{
            console.error(error)
            alert('wrong')
        })
    }
  return (
    <div>
        <div className="lg:w-[45%] lg:m-auto m-5 border-4 border-green-500 mt-10 bg-zinc-100">
            <div className="p-2 text-center bg-green-500 text-white">
                <h2>Login System</h2>
            </div>
            <div className="lg:p-8 p-4 lg:w-[80%] lg:m-auto items-center">
                <div>
                    <div className="text-center lg:mt-[50px] mb-10]">
                        <h2 className="text-xl">Login Page</h2>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <form onSubmit={handleLogin} className="mt-8">
                        
                        <label className="mt-7 text-gray-500" htmlFor="email">Email</label>
                        <input className="w-[100%] p-1 bg-white" type="email" name="email" id="email" required/>
                        
                        <label className="text-gray-500" htmlFor="password">Password</label>
                        <input className="w-[100%] p-1 bg-white" type="password" name="password" id="password" required/>
                        <input className="mt-8 bg-green-500 text-center text-white p-2 w-[100%]" type="submit" value="Submit" />
                    </form>

                    <div className='flex mt-5'>
                    <button onClick={handleGoogle} className="btn bg-red-800 border-none  text-white w-[32%] rounded-none">Google</button>
                    <button className="btn bg-black border-none  text-white w-[32%] ml-2 mr-2 rounded-none">GitHub</button>
                    <button className="btn bg-blue-700 text-white border-none w-[32%] rounded-none">Apple</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
