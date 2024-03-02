import React from 'react'
import Slider from 'react-slick'


const TestimonialData = [
  {
    id: 1,
    name: "Dilshad",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Sabir ali",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Dipankar kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Satya Narayan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];



const Testimonials = () => {
  const settings = {

    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],



  }
  return (
    <div className='py-14 mb-10'>
      <div className='container'>
          <div data-aos='fade-up' className='text-center mb-10'>
              <h1 className='text-4xl font-bold font-cursive text-gray-800'>
                Testimonials
              </h1>
          </div>

          
          <div data-aos='zoom-in'>
            <Slider {...settings}>
                {
                  TestimonialData.map((data, index) =>{
                    return(
                      <div className='my-6' key={data.id}>
                        <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative'>
                          <div className='mb-4'>
                            <img src={data.img} alt=""
                            className='rounded-full w-20 h-20' />
                          </div>

                          <div className='flex flex-col items-center gap-4'>
                            <div className='space-y-3'>
                              <p className='text-xs text-gray-500'>{data.text}</p>
                              <h1 className='text-xl font-bold text-black/70 font-cursive'>{data.name}</h1>
                            </div>
                          </div>

                          <p className='text-black/20 font-serif text-9xl absolute top-0 right-0
                          '>,,</p>
                        </div>
                      </div>
                    )
                  })
                }
            </Slider>
          </div>
      </div>
    </div>
  )
}

export default Testimonials