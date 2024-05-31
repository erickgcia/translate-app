import '../App.css'
import TranslateBox from '../components/TranslateBox'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const TranslatePage = () => {
  const isOpen = useSelector((state: RootState) => state.menu.isOpen)

  return (
    <>
      <Header isOpen={isOpen} />
      <main>
        <Menu isOpen={isOpen} />
        <article className="container">
          <TranslateBox />
        </article>
      </main>
      <Footer />
    </>
  )
}

export default TranslatePage
