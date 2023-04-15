'use client';

import { Manrope} from "@next/font/google";
import styles from './page.module.scss'
import Header from "@/app/(components)/templates/Header/Header";

import { useState} from "react";
import SliderProducts from "@/app/(components)/UI/SliderProducts/SliderProducts";
import '../../../styles/slick-slider.scss'

const font = Manrope({
    weight: '400',
    preload: false,
})

export default function Home() {
    const [users, setUsers] = useState(null);

  return (
    <main className={font.className}>
      <div className={styles.description}>
          <Header/>
          <div className={'container'}>
            <SliderProducts/>

          </div>
      </div>
    </main>
  )
}
