import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export const Viewcart = () => {

    const loader = useLoaderData();

    const { title, img, description ,price} = loader;

    return (
        <div className='m-11'>

            <div className="hero bg-white shadow-2xl min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={img}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-6">
                            {description}
                        </p>
                        <h1 className="text-2xl font-bold mb-2">{price}</h1>
                        <Link to='/checkout'><button className="btn btn-primary">Add to cart</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

