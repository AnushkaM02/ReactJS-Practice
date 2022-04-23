import React from 'react'
import './testimonials.css'
import avatar1 from "../../assets/avatar.jpg"
import avatar2 from "../../assets/avatar.jpg"
import avatar3 from "../../assets/avatar.jpg"
import avatar4 from "../../assets/avatar.jpg"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: avatar1,
    name: "Jane Doe",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias possimus et, sapiente aliquam culpa, qui omnis velit iste vero ex obcaecati quod minus saepe nesciunt iure ad quas dolores. Ea!"
  },
  {
    avatar: avatar2,
    name: "John Doe",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias possimus et, sapiente aliquam culpa, qui omnis velit iste vero ex obcaecati quod minus saepe nesciunt iure ad quas dolores. Ea!"
  },
  {
    avatar: avatar3,
    name: "Amy Doe",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias possimus et, sapiente aliquam culpa, qui omnis velit iste vero ex obcaecati quod minus saepe nesciunt iure ad quas dolores. Ea!"
  },
  {
    avatar: avatar4,
    name: "Jake Doe",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias possimus et, sapiente aliquam culpa, qui omnis velit iste vero ex obcaecati quod minus saepe nesciunt iure ad quas dolores. Ea!"
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Lorem Ipsum</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          pagination = {{clickable: true}}>
      {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials