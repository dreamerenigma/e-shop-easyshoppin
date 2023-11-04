import { useSession } from "next-auth/react";
import styles from "./styles.module.scss";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineClipboardList } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Navigation } from 'swiper/modules';
import { userSwiperArray } from "../../../data/home";
import Link from "next/link";

export default function User() {
  const { data: session } = useSession();
  return (
    <div className={styles.user}>
      <img 
        src="../../../images/userHeader.jpg" 
        alt="" 
        className={styles.user__header}
      />
      <div className={styles.user__container}>
        {session ? (
          <div className={styles.user__infos}>
            <img src={session.user?.image} alt="" />
            <h4>{session.user.name}</h4>
          </div>
        ) : (
          <div className={styles.user__infos}>
            <img 
              src="https://i.ibb.co/HxMGVFs/245-2459068-marco-martinangeli-coiffeur-portrait-of-a-man.png"
              alt="" 
            />
            <div className={styles.user__infos_btns}>
              <button>Register</button>
              <button>Login</button>
            </div>
          </div>
        )}
        <ul className={styles.user__links}>
          <li>
            <Link href="/profile">
              <IoSettingsOutline />
            </Link>
          </li>
          <li>
            <Link href="">
              <HiOutlineClipboardList />
            </Link>
          </li>
          <li>
            <Link href="">
              <AiOutlineMessage />
            </Link>
          </li>
          <li>
            <Link href="">
              <BsHeart />
            </Link>
          </li>
        </ul>
        <div className={styles.user__swiper}>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            navigation={true}
            modules={[EffectCards, Navigation]}
            className="user__swiper"
            style={{ 
              maxWidth: "180px",
              height: "240px",
              marginTop: "1rem",
            }}
          >
            {userSwiperArray.map((item, i) => (
              <SwiperSlide key={i}>
                <Link href="">
                  <img src={item.image} alt="" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <img 
        src="../../../images/userHeader.jpg" 
        alt="" 
        className={styles.user__footer}
      />
    </div>
  );
}
