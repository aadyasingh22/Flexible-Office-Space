import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


// import '../style.css';

const Home = () => {
  return (
    <div>
      {/* main-1 */}
      <div style={{position: 'relative', zIndex: '-1'}}>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="bg-cover bg-center h-screen"
            style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1661879435429-a396d927c686?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlJTIwbWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D")' }}
          >
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-center h-screen"
            style={{ backgroundImage: 'url("https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600")' }}
          >
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-center h-screen"
            style={{ backgroundImage: 'url("https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg?auto=compress&cs=tinysrgb&w=600")' }}
          >
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-center h-screen"
            style={{ backgroundImage: 'url("https://images.pexels.com/photos/1181408/pexels-photo-1181408.jpeg?auto=compress&cs=tinysrgb&w=600")' }}
          >
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-center h-screen"
            style={{ backgroundImage: 'url("https://images.pexels.com/photos/1181394/pexels-photo-1181394.jpeg?auto=compress&cs=tinysrgb&w=600")' }}
          >
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-center h-screen"
            style={{ backgroundImage: 'url("https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=600")' }}
          >
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-center h-screen"
            style={{ backgroundImage: 'url("https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600")' }}
          >
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-center h-screen"
            style={{ backgroundImage: 'url("https://images.pexels.com/photos/7433853/pexels-photo-7433853.jpeg?auto=compress&cs=tinysrgb&w=600")' }}
          >
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-center h-screen"
            style={{ backgroundImage: 'url("https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg?auto=compress&cs=tinysrgb&w=600")' }}
          >
          </div>
        </SwiperSlide>
      </Swiper>
        
        {/* card */}
        <div className='grid grid-cols-4'>
        <div style={{position: 'absolute', top:'-20px',zIndex:'1'}} className="m-15 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 left-12">
  <a href="#">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Noteworthy technology acquisitions 2021
    </h5>
  </a>
  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    Here are the biggest enterprise technology acquisitions of 2021 so far, in
    reverse chronological order.
  </p>
  <a
    href="#"
    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Read more
    <svg
      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
  </a>
</div>
       </div>

      {/* main-2 */}
      



      </div>
    </div>
  )
}

export default Home