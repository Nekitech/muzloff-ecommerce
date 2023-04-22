import './styles/globals.scss'
import {Manrope} from "@next/font/google";
import Header from "@/app/(components)/templates/Header/Header";

const font = Manrope({
    weight: '400',
    preload: false,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      {/*
        <head /> will contain the (components) returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
          <link rel="stylesheet" type="text/css" charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
          <link rel="stylesheet" type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
      </head>

      <head />
      <body className={font.className}>{
          <>
              <Header/>
              {
                  children
              }
          </>

      }</body>
    </html>
  )
}
