'use client';

import { Manrope} from "@next/font/google";
import styles from './page.module.scss'
import Header from "@/app/(components)/templates/Header/Header";

import { useState} from "react";
import SliderProducts from "@/app/(components)/UI/SliderProducts/SliderProducts";
import '../../../styles/slick-slider.scss'
import ProductsByTypes from "@/app/(components)/templates/ProductsByTypes/ProductsByTypes";



export default function Home() {
    const [users, setUsers] = useState(null);

  return (
    <main>
      <div className={styles.description}>
          <div className={'container'}>
            <SliderProducts/>
            <ProductsByTypes/>
          </div>
      </div>
    </main>
  )
}
