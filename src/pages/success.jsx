import Link from "next/link";
import Image from 'next/image';
import Head from "next/head";

import { stripe } from '../lib/stripe'

import styles from '../styles/pages/success.module.scss';

export default function success({ customerName, product }) {
  return (
    <>
      <Head>
        <title>Compra efectuada | Finance Shop</title>

        <meta name="robots" content="noindex" />
      </Head>
      <div className={styles.successContainer}>
          <div className={styles.successContents}>
              <h1>Compra efetuada!</h1>
              <div className={styles.successImage}>
                <Image src={product.imageUrl} width={120} height={110} alt=''/>
              </div>
              <p>Uhuul <strong>{customerName}</strong>, sua <strong>{product.name}</strong> já está a caminho da sua casa. </p>
              <Link href='/'>
                  Voltar ao catálogo
              </Link>
          </div>
      </div>
    </>
  )
}

export async function getServerSideProps({ query }) {
    if(!query.session_id){
      return{
        redirect: {
          destination: '/',
          permanent: false,
        }
      }
    }

    const sessionId = String(query.session_id);
    
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'line_items.data.price.product'],

    })
    
    const customerName = session.customer_details.name;
    const product = session.line_items.data[0].price.product;
    
    return {
      props: {
        customerName,
        product: {
          name: product.name,
          imageUrl: product.images[0].url,
        }
      },
    }
}
