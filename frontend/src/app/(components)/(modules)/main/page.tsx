'use client';

import Image from 'next/image'
import {Inter, Manrope} from "@next/font/google";
import styles from './page.module.scss'
import Header from "@/app/(components)/templates/Header/Header";
import client from "@/apollo/ApolloClient";
import {gql} from "@apollo/client";
import * as process from "process";
import {useEffect, useState} from "react";
import SliderProducts from "@/app/(components)/UI/SliderProducts/SliderProducts";

const font = Manrope({
    weight: '400',
    preload: false,
})

export default function Home() {
    const [users, setUsers] = useState(null);
    //
    // const getAllProductsCart = async () => {
    //     return await client.query({
    //         query: gql`
    //             query {
    //                 getAllProductsCart(id: 5) {
    //                     type_instrument,
    //                     type_product,
    //                     name,
    //                     cost,
    //                     manufacturer,
    //                     countStock
    //                 }
    //             }
    //         `,
    //     });
    // }
    // getAllProductsCart().then(res => {
    //     const {data, error, loading} = res;
    //     console.log(data.getAllProductsCart)
    // })
    // const getAllUser = async () => {
    //     return await client.query({
    //         query: gql`
    //             query {
    //                 getAllUser {
    //                     id, name, email
    //                 }
    //             }
    //         `,
    //     });
    // }
    // getAllUser()
    //     .then(res => {
    //     const {data, error, loading} = res;
    //     setUsers(data.getAllUser)
    // })
    //     .catch(err => console.log(err))

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
