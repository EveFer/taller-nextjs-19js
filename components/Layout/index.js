import Head from 'next/head'
import Navbar from '../Navbar/Navbar'

export default function Layout({children, title, description}) {
  return (
    <>
    <Head>
        <title>{title}</title>
    </Head>
    <Navbar></Navbar>
        {children}
        {/* <Footer></Footer> */}
    </>
  )
}

{/* <Main>
    <h1></h1>
    <p></p>
</Main> */}
