
import { useContext, useState } from 'react'
import { ItemCard } from '../ItemCard/ItemCard'
import { AuthContext } from '../Authcontext/AuthPriver'
import Mm from '../../assets/img/59.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
export const Cardmenu = () => {


  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  var settingss = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true
  };

  const { card } = useContext(AuthContext);
  const [slice, setSlice] = useState(4)

  return (
    <div className='w-[85%] m-auto'><div>
      <h1>New & Trending menu</h1>

    </div>
      <div className=''>
        <div className="slider-container hidden lg:block">

          <Slider {...settings}>
            {
              card.map((item) => <ItemCard item={item}></ItemCard>)
            }
          </Slider>


        </div>
        <div className='slider-container lg:hidden'>
          <Slider {...settingss}>
            {
              card.map((item) => <ItemCard item={item}></ItemCard>)
            }
          </Slider>

        </div>

      </div>
      <div className='grid grid-cols-2 mt-[70px]'>
        <div className='bg-zinc-300'>
          <div className='bg-white round'>
            <h1 className="lg:text-5xl lg:mt-[100px] pt-20px text-2xl font-bold">
              Keep track of <br />
              <span className="text-green-700">Fitness Goal</span>
            </h1>
            <p className="mt-3 font-bold">Order on Simply Good Food</p>
            <div className="pt-5 pb-7"><a className="border  px-5 text-white py-2 bg-amber-600">Button</a></div>
          </div>
        </div>
        <div>
          <img src={Mm} alt="" />
        </div>
      </div>
      <div>
        <div className='text-center mt-[70px]'>
          <h1 className='text-3xl font-bold mb-2'>Popular Frequently Asked Questions</h1>
          <p className='mb-[50px]'>Simply Good Food prepares and delivers organically sourced, fresh meals to your door nationwide. Unlike other meal kit delivery services that need preparation and cleaning, our meals are delivered ready to consume. Our mission is to make healthy eating easy and enjoyable while not sacrificing flavor. Do you have a question regarding our shipping service?</p>
        </div>
        <div className="collapse collapse-arrow shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow shadow-md mt-3 mb-3">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>

        <div className="collapse collapse-arrow shadow-md mt-3 mb-3">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>

        <div className="collapse collapse-arrow shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  )
}
