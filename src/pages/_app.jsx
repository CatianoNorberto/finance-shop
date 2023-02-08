import Header from 'components/Header'
import Footer from 'components/Footer'

import '../styles/globals.scss'

export default function App({ Component, pageProps }) {
  
  return (
    <div>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}
