

import Bng from "../../assets/img/sss.png"
import Nnn from "../../assets/img/555.png"
import Zz from "../../assets/img/zz.png"
import Ss from "../../assets/img/sss.png"
import { Cardmenu } from "../CardMenu/Cardmenu"
import { useContext } from "react"
import { AuthContext } from "../Authcontext/AuthPriver"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
export const Home = () => {

    const { user } = useContext(AuthContext)
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <div>
            <div className="md:w-[85%] m-auto">
                <div className="lg:grid lg:grid-cols-2 py-[50px] ">
                    <div>
                        <div className="lg:pb-[50px] pl-10">
                            <h1 className="lg:text-7xl lg:mt-[100px] text-4xl font-bold">
                                Keep track of <br />
                                <span className="text-green-700">Fitness Goal</span>
                            </h1>
                            <p className="mt-3 font-bold">Order on Simply Good Food</p>
                            <div className="mt-5"><a className="border  px-5 text-white py-2 bg-amber-600 ">Button</a></div>
                        </div>
                    </div>
                    <div className="text-end ">
                        <div className="back lg:ml-[100px]">


                            <div>
                                <div className="slider-container ">
                                    <Slider {...settings}>
                                        <div>
                                            <h3><img className="pt-8" src={Bng} alt="" /></h3>
                                        </div>
                                        <div>
                                            <h3><img className="pt-8" src={Ss} alt="" /></h3>
                                        </div>
                                        <div>
                                            <h3><img className="pt-8" src={Zz} alt="" /></h3>
                                        </div>

                                    </Slider>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[85%] m-auto flex justify-center">
                <div>
                    <h2 className="text-3xl font-bold text-center mb-[50px] mt-[70px]">Why Simply Good Food</h2>
                    <div className="grid lg:grid-cols-3 text-center flex justify-center">
                        <div>
                            <div className="card  w-96 ">
                                <figure className="px-10 pt-10">
                                    <img
                                        src={Nnn}
                                        className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                   
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card ">
                                <figure className="px-10 pt-10">
                                    <img
                                        src={Nnn}
                                        className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                   
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card ">
                                <figure className="px-10 pt-10">
                                    <img
                                        src={Nnn}
                                        className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                user && <div>
                    <Cardmenu></Cardmenu>
                </div>
            }
        </div>
    )
}
