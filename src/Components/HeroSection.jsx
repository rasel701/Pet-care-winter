import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HeroText from "./HeroText";

const HeroSection = () => {
  return (
    <div className="w-full h-[700px] ">
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
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
          <div className="relative">
            <img
              className="w-full h-[600px] object-cover"
              src="https://www.shutterstock.com/image-photo/two-cute-corgi-dogs-sitting-600nw-2389613309.jpg"
              alt="Dog with coat"
            />
            <HeroText />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[600px] object-cover"
              src="https://plus.unsplash.com/premium_photo-1664303955990-b740dbd83772?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=60"
              alt="Cat in blanket"
            />
            <HeroText />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[600px] object-cover"
              src="https://media.istockphoto.com/id/1222600361/photo/smiling-woman-and-her-dog-in-a-snowy-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=s12OUmmSIhVVKELO0vMnnnkEQWG6vmKC5Jjkg4IAg1I="
              alt="Rabbit with hat"
            />
            <HeroText />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// const HeroSection = () => {
//   return (
//     <div className="w-full h-[600px] border-3">
//       <Swiper loop autoplay={{ delay: 3000 }}>
//         <SwiperSlide>
//           <img
//             className="w-full  h-[500px] object-cover"
//             src="https://www.shutterstock.com/image-photo/two-cute-corgi-dogs-sitting-600nw-2389613309.jpg"
//             alt="Dog with coat"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             className="w-full h-[500px] object-cover"
//             src="https://plus.unsplash.com/premium_photo-1664303955990-b740dbd83772?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvZyUyMHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
//             alt="Cat in blanket"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             className="w-full  h-[500px] object-cover"
//             src="https://media.istockphoto.com/id/1222600361/photo/smiling-woman-and-her-dog-in-a-snowy-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=s12OUmmSIhVVKELO0vMnnnkEQWG6vmKC5Jjkg4IAg1I="
//             alt="Rabbit with hat"
//           />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default HeroSection;
