import "./testimony.css"
import IMG1 from "../assets/princess.jpeg"
import IMG2 from "../assets/francis.jpeg"
import IMG3 from "../assets/deulo.jpeg"
import IMG4 from "../assets/gideon.jpeg"

// import Swiper core and required modules
import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const visitor = [
  {
    id: 1,
    image: IMG1,
    title: "Princess Omah",
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio incidunt dolor, odio eligendi, at maiores dolores corrupti sit corporis quod nulla voluptates aperiam nemo sequi ipsam consectetur. Quae, illum adipisci?",
  },

  {
    id: 2,
    image: IMG2,
    title: "michael wilford",
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio incidunt dolor, odio eligendi, at maiores dolores corrupti sit corporis quod nulla voluptates aperiam nemo sequi ipsam consectetur. Quae, illum adipisci?",
  },

  {
    id: 3,
    image: IMG3,
    title: "francis efe",
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio incidunt dolor, odio eligendi, at maiores dolores corrupti sit corporis quod nulla voluptates aperiam nemo sequi ipsam consectetur. Quae, illum adipisci?",
  },

  {
    id: 4,
    image: IMG4,
    title: "gideon ossai",
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio incidunt dolor, odio eligendi, at maiores dolores corrupti sit corporis quod nulla voluptates aperiam nemo sequi ipsam consectetur. Quae, illum adipisci?",
  }
];

export default function Testimony() {
  return (
    <section>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonial_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {visitor.map(({ id, image, title, message }) => {
          return (
            <SwiperSlide key={id} className="testimonial_content">
              <img className="client_photo" src={image} alt={title} />
              <h3 className="client_name">{title}</h3>
              <small className="client_feedback">{message}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}






