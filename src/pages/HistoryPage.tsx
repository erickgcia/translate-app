import { useSelector } from 'react-redux'
import Header from '../components/Header'
import Menu from '../components/Menu'
import { RootState } from '../app/store'
import Footer from '../components/Footer'

const HistoryPage = () => {
  const isOpen = useSelector((state: RootState) => state.menu.isOpen)
  return (
    <>
      <Header isOpen={isOpen} />
      <main>
        <Menu isOpen={isOpen} />
      </main>
      <Footer />
    </>
  )
}

export default HistoryPage
