import Head from 'next/head'
import React from 'react'

//utilizando typescript nos components REACT
const Home: React.FC = () => {
return (
  <>
    <Head>
      <title>Vendas App</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main >
      <div >
        <h1>
          Olá sejam bem vindo!!!
        </h1>
        </div>
    </main>
  </>
)
}

export default Home;
