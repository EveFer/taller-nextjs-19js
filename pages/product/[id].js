import {useEffect, useState} from 'react'
import {useRouter} from 'next/router' // hook -> para acceder a ruta por medio de código
import Navbar from '../../components/Navbar/Navbar'


// npm run build
export const getStaticPaths = async () => {
  const response = await fetch('http://localhost:3000/api/products/')
  const {data} = await response.json()

  const paths = data.map((product) => {
    return {
      params: {id: product.id}
    }
  })

  // [
  //   { params: { id: '1' } }, 
  //   { params: { id: '2' } },
  //   { params: { id: '5' } },
  //   { params: { id: '4' } },
  // ]
  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export const getStaticProps = async(context) => {
  const {id} = context.params
  const response = await fetch(`http://localhost:3000/api/products/${id}`)
  const {data} = await response.json()
  return {
    // Passed to the page component as props
    props: { product: data },
  }
}

// página dinamica
export default function ProductDetail({product}) {
    // const [product, setProduct] = useState()
    const router = useRouter()
    // console.log(router.query)
    const {id} = router.query
    // client side rendering -> CSR
    // useEffect(() => {
    //   fetch(`/api/products/${id}`)
    //   .then((response) => response.json())
    //   .then(dataJson => {
    //     console.log(dataJson)
    //     setProduct(dataJson.data)
    //   })
    // }, [id])
  return (
    <>
    <Navbar></Navbar>
    <h1>Página del detalle del producto: {id}</h1>
    {
      product ? (
        <article>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name}/>
        <h2>${product.price}.00</h2>
      </article>
      )
      : null
    }
    </>
  )
}
