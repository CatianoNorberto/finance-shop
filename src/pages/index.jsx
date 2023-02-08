import Image from 'next/image'
import { GetServerSideProps } from 'next'

import { useKeenSlider } from 'keen-slider/react'

import { stripe } from '../lib/stripe'

import Button from 'components/Button'

import styles from '../styles/pages/home.module.scss'
import 'keen-slider/keen-slider.min.css'

import ImageWelcome from '../../public/images/bannerWelcome.jpg'
import Phone from '../../public/images/phone.jpg'

export default function Home( { products }) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <div className={styles.container}> 
      <div className={styles.contents}>
        <div className={styles.welcome}>
          <div className={styles.welcomeContent}>
            <h2>Desbloqueando Cripto by Finance</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Dolorem dignissimos laudantium veritatis, fugit, minus, 
              repudiandae non molestiae aperiam veniam officia quas eaque asperiores velit. 
              Ducimus atque consequatur qui sapiente voluptatem.
            </p>
            <span>Lorem ipsum dolor sit. </span>
          </div>
          <div className={styles.welcomeBanner}>
            <Image src={ImageWelcome} alt=""/>
          </div>
        </div>
      </div>

      <div className={styles.bannersContainer}>
        <div className={styles.bannersContents}>
          <h2>O Que é Finance?</h2>
          <div className={styles.banner}></div>
          <div className={styles.banner}></div>
          <div className={styles.banner}></div>
          <div className={styles.banner}></div>
        </div>

        <div className={styles.appContainer}>
          <div className={styles.appContents}>
            <div className={styles.appCompany}>
              <h2>Lorem ipsum dolor, sit amet consectetur adipisicing</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla adipisci dolorum voluptate.</p>
              <div className={`${styles.carouleContent} ${'keen-slider'}`} ref={sliderRef}>
                {products.map(product => {
                  return (
                    <div key={product.id} className={`${styles.products} ${'keen-slider__slide'}`}>
                      <Image src={product.imageUrl} width={400} height={380} alt=""/>
                      <footer>
                        <strong>{product.name}</strong>
                        <span>{product.price}</span>
                      </footer>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className={styles.appCompany}>
              <h2>Lorem ipsum dolor, sit amet consectetur adipisicing</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla adipisci dolorum voluptate.</p>
              <div className={styles.appCurrent}>
                <p>Lorem ipsum dolor <br/>sit amet consectetur <span>adipisicing</span></p>
                <div className={styles.phoneImage}>
                  <Image src={Phone}  alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.criptoContainer}>
        <div className={styles.criptoContents}>
          <div>
            <h2>Lorem ipsum dolor: <br/><span>lorem ipsum dolor sit amet consectetur.</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quisquam fugit optio animi dignissimos pariatur iusto aliquam, minus, ad necessitatibus magnam sed. Architecto amet libero fugiat tempore error eos laboriosam?</p>
          </div>
          <div className={styles.cardContents}>
            <div className={styles.cards}>
              <div className={styles.cardImage}>
                <Image src={Phone} width={100} height={100} alt=""/>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est distinctio tempora voluptatibus dicta autem nihil nobis omnis illo.</p>
              </div>
            </div>
            <div className={styles.cards}>
              <div className={styles.cardImage}>
                <Image src={Phone} width={100} height={100} alt=""/>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est distinctio tempora voluptatibus dicta autem nihil nobis omnis illo.</p>
              </div>
            </div>
            <div className={styles.cards}>
              <div className={styles.cardImage}>
                <Image src={Phone} width={100} height={100} alt=""/>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est distinctio tempora voluptatibus dicta autem nihil nobis omnis illo.</p>
              </div>
            </div>
            <div className={styles.cards}>
              <div className={styles.cardImage}>
                <Image src={Phone} width={100} height={100} alt=""/>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est distinctio tempora voluptatibus dicta autem nihil nobis omnis illo.</p>
              </div>
            </div>
           
          </div>
          <div className={styles.cardFooter}>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, sequi quis</span>
          </div>
        </div>
      </div>
      {/* <Button title="Enviar" color="secundary"/> */}
    </div>
  )
}

export async function getServerSideProps(context) {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: product.default_price.unit_amount / 100,
    }
  })

  return {
    props: {
      products,
    }
  }
}