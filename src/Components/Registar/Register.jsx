import { useContext } from "react";
import { AuthContext } from "../Authcontext/AuthPriver";



export const Register = () => {
    
    const {createUser}= useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const phone = form.phone.value;
        console.log(name, email, password, phone);

        createUser(email, password)
        .then(result => {
            console.log(result.user);

            const createAt = result.user?.metadata?.creationTime
            const user = {name, email, password, phone,createdAt: createAt}
            

            fetch('http://localhost:5000/users',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data => console.log(data))
        })
        .catch(error => {
            console.error(error)
        })


       
        

    }
  return (
    <div>
        <div className="lg:w-[45%] lg:m-auto m-5 border-4 border-green-500 mt-10 bg-zinc-100">
            <div className="p-2 text-center bg-green-500 text-white">
                <h2>Registration System</h2>
            </div>
            <div className="lg:p-8 p-4 lg:w-[80%] lg:m-auto items-center">
                
                <div>
                    <div className="text-center mt-[50px] mb-10]">
                        <h2 className="text-xl">Registration</h2>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <form onSubmit={handleRegister} className="mt-8">
                        <label className="text-gray-500" htmlFor="name">User Name</label>
                        <input className="w-[100%] p-1 bg-white" type="text" name="name" id="name" required />
                        <label className="mt-7 text-gray-500" htmlFor="email">Email</label>
                        <input className="w-[100%] p-1 bg-white" type="email" name="email" id="email" required/>
                        <label className="text-gray-500" htmlFor="phone">Contact No.</label>
                        <input className="w-[100%] p-1 bg-white" type="text" name="phone" id="phone" required/>
                        <label className="text-gray-500" htmlFor="password">Password</label>
                        <input className="w-[100%] p-1 bg-white" type="password" name="password" id="password" required/>
                        
                        

                        
                
                        <input className="mt-8 bg-green-500 text-center text-white p-2 w-[100%]" type="submit" value="Submit" />
                    </form>


                </div>
            </div>
        </div>
    </div>
  )
}
