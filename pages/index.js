import {useEffect, useState} from 'react'
import Navbar from '../components/Navbar/Navbar'
import Link from 'next/link'
import Layout from '../components/Layout'

export const getServerSideProps = async (context) => {
  // Aqui es el servidor -> SSR
  const response = await fetch('http://127.0.0.1:3000/api/products')
  const {data} = await response.json()
  // console.log(data)

  return {
    props: {
      products: data
    }
  }
}


// pages/index.js -> /home
export default function Home({products}) {
  // const [products, setProducts] = useState([])
 
  // CSR 
  // useEffect(() => {
  //   fetch('/api/products')
  //     .then((response) => response.json())
  //     .then(dataJson => {
  //       console.log(dataJson)
  //       setProducts(dataJson.data)
  //     })
  // }, [])

  // fetch
  // state
  // useEffect
  // map
  return (
    <Layout title="Home Kodemia">
      {/* <Navbar></Navbar> */}
      <h1>Esta es la página del home</h1>
      {
        products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <article >
              <h2>{product.name} | {product.price}</h2>
            </article>
          </Link>
        ))
      }
    </Layout>
  )
}
