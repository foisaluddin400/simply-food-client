import { useContext } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { AuthContext } from "../Authcontext/AuthPriver";
import { Link } from "react-router-dom";

export const Userprofile = () => {

    const { user } = useContext(AuthContext);

    const handleUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const phone = form.phone.value;

        console.log(name, email, password, phone);




    }


    return (
        <div>
            <div>
                <div className="lg:w-[45%] lg:m-auto m-5 border-4 border-green-500 mt-10 bg-zinc-100">


                    <div className="lg:p-8 p-4  lg:w-[80%] lg:m-auto items-center">
                        <div className="card  ">
                            <figure className=" pt-10">
                            <div className="text-8xl ">
                                {
                                    user ? <>
                                        <img className="rounded-full" src={user.photoURL} alt="" />
                                    </> : <FaRegUserCircle className="text-zinc-400" />
                                }
                            </div>
                            </figure>
                            <div className="card-body items-center text-center">
                            {
                                user ? <>
                                    <h1 className="text-3xl mt-3 font-bold">{user.email}</h1>


                                </> : <Link to='/login'>No user name <button className="text-orange-500">Sign In</button></Link>
                            }

                                

                            </div>
                        </div>


                        
                    </div>
                </div>
                <div className="lg:w-[45%] lg:mt-10 lg:m-auto m-5 border-4 border-green-500 mt-10 bg-zinc-100">
                    <div className="p-2 text-center bg-green-500 text-white">
                        <h2>Edit User System</h2>
                    </div>

                    <div className="lg:p-8 p-4 lg:w-[80%] lg:m-auto items-center">

                        <div>
                            <div className="text-center mt-[50px] mb-10]">
                                <h2 className="text-xl">User Update</h2>
                                <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
                            </div>
                            <form onSubmit={handleUser} className="mt-8">
                                <label className="text-gray-500" htmlFor="name">User Name</label>
                                <input className="w-[100%] p-1 bg-white" type="text" name="name" id="name" required />
                                <label className="mt-7 text-gray-500" htmlFor="email">Email</label>
                                <input className="w-[100%] p-1 bg-white" type="email" name="email" id="email" required />
                                <label className="text-gray-500" htmlFor="phone">Contact No.</label>
                                <input className="w-[100%] p-1 bg-white" type="text" name="phone" id="phone" required />
                                <label className="text-gray-500" htmlFor="password">Password</label>
                                <input className="w-[100%] p-1 bg-white" type="password" name="password" id="password" required />





                                <input className="mt-8 bg-green-500 text-center text-white p-2 w-[100%]" type="submit" value="Submit" />
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
