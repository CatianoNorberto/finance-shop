/* eslint-disable react-hooks/rules-of-hooks */
import Image from 'next/image'
import Head from 'next/head'
import { useState } from 'react'

import { stripe } from '../../lib/stripe'

import styles from '../../styles/pages/product.module.scss'

export default function Product({ product }) {
  const [isCreatingCheckout, SetIsCreatingCheckout] = useState(false)

  async function handleByProduct() {
    try {
      SetIsCreatingCheckout(true);

      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      })
      
      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl
    } catch (err) {

      SetIsCreatingCheckout(false);
      alert('Falha ao redirecionar ao checkout!')
    }
  }
  
  return (
    <>
      <Head>
        <title>{product.name} | Finance shop</title>
      </Head>

      <div className={styles.productContainer}>
        <div className={styles.productContents}>
          <div className={styles.productImage}>
            <Image src={product.imageUrl} width={400} height={380} alt=''/>
          </div>
          <div className={styles.description}>
              <h1>{product.name}</h1>
              <span>{product.price}</span>
              <p>{product.description}</p>
              <button 
                disabled={isCreatingCheckout} 
                onClick={handleByProduct}
              >
                Comprar agora
              </button>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  return { 
    paths: [{ params: { id: 'prod_NJZO9Bsvoanrlj' } }], 
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const productId = String(params.id);
  
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })
  
  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(product.default_price.unit_amount / 100),
        description: product.description,
        defaultPriceId: product.default_price.id
      },
    },
    revalidate: 60 * 60 * 1 // a cada 1 horas
  }
}

 