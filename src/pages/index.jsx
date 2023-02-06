import Image from 'next/image'
import Button from 'components/Button'

import ImageWelcome from '../../public/images/bannerWelcome.jpg'
import Phone from '../../public/images/phone.jpg'
import styles from '../styles/pages/home.module.scss'

export default function Home() {
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
              <div className={styles.carouleContent}>
                <div className={styles.carouleImage}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet a, aspernatur deleniti cum saepe adipis</p>
                </div>
                <div className={styles.carouleImage}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet a, aspernatur deleniti cum saepe adipis</p>
                </div>
                <div className={styles.carouleImage}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet a, aspernatur deleniti cum saepe adipis</p>
                </div>
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
