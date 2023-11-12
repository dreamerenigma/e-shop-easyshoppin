import styles from "./styles.module.scss";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import React, { useEffect, useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { simillar_products } from "../../../data/products";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

export default function SimillarSwiper() {
  return (
    <Swiper
      slidePerView={4}
      spaceBetween={5}
      slidesPerGroup={3}
      navigation={true}
      modules={[Navigation]}
      className="swiper simillar_swiper products__swiper"
      breakpoints={{
        640: {
          width: 640,
          slidesPerView: 5,
        },
      }}
    >
      {simillar_products.map((p) => (
        <SwiperSlide>
          <Link href="">
            <img src={p} alt="" />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
