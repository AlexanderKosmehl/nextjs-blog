/* eslint-disable react/prop-types */
import React from 'react'
import '../styles/global.css'

export default function App ({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}
