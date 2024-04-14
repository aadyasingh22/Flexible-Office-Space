import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay,Pagination, Navigation } from 'swiper/modules';


// import '../style.css';

const Home = () => {
  return (
    <div>
      
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
    </div>
  )
}

export default Home