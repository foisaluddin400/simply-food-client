
import { Link } from 'react-router-dom';

export const ItemCard = ({ item }) => {
  const {_id, img, title, price } = item;

 
  return (
    <div>
      <div>

        <div className='p-3 shadow-xl m-2'>
          <Link><img className='h-[200px]' src={img} alt="" /></Link>
          <h1 className='text-xl pt-2 font-bold'>{title}</h1>
          <h1 className='text-xl pb-2'>{price}</h1>
          <Link to={`/view/${_id}`}><button className='w-[100%] bg-green-600 text-white p-2 mb-2'>View details</button></Link>
        </div>
      </div>
      
    </div>
  )
}
