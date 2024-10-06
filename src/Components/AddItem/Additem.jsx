import { FaShoppingCart } from "react-icons/fa";
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Authcontext/AuthPriver"
import Ss from "../../assets/img/sss.png"

export const Additem = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrder] = useState([]);
    const url = `http://localhost:5000/checked?email=${user?.email}`;

    useEffect(() => {
        
        fetch(url,{credentials:'include'})
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [url])
    return (
        <div>
            <div className="mm">
                <div className="ss">

                    <details className="dropdown">
                        <summary className="btn m-1"><FaShoppingCart className="  text-white " />{
                                    orders.length
                                }</summary>
                        <ul className="bg-white w-[400px] text-black rounded-box  p-2 shadow">
                            <div>
                                {
                                    orders.map((order) => 
                                    <div className="flex justify-between bg-">
                                        <img className="w-[70px]" src={Ss} alt="" />
                                        <h2>{order.name}</h2>
                                        <h2>{order.phone}</h2>
                            
                                    </div>
                                )
                                }
                                


                            </div>
                        </ul>

                    </details>
                </div>
            </div>
        </div>
    )
}
