import { useSelector } from 'react-redux'
import Header from '../components/Header'
import Menu from '../components/Menu'
import { RootState } from '../app/store'
import Footer from '../components/Footer'
import { useState } from 'react'
import LogInForm from '../components/LogInForm'

const ProfilePage = () => {
  const isOpen = useSelector((state: RootState) => state.menu.isOpen)
  const [isLogged, setIsLogged] = useState(false)
  return (
    <>
      <Header isOpen={isOpen} />
      <main style={!isLogged ? { position: 'relative' } : {}}>
        <Menu isOpen={isOpen} />
        {!isLogged ? (
          <LogInForm setIsLogged={setIsLogged} />
        ) : (
          <h1>Profile Page</h1>
        )}
      </main>
      <Footer />
    </>
  )
}

export default ProfilePage
