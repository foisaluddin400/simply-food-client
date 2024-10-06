import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Authcontext/AuthPriver"


export const About = () => {
  const {user } = useContext(AuthContext);
  const [orders , setOrder] = useState([]);
  const url = `http://localhost:5000/checked?email=${user?.email}`;

  useEffect(()=>{
    fetch(url)
    .then(res=> res.json())
    .then(data=> setOrder(data))
  },[])
  return (
    <div>
{
  orders.map((order)=><div>{order.name}</div>)
  }


    </div>
  )
}
