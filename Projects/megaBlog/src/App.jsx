import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {

  const [loading, setLoading] = useState(true)

  //dispatch is used to merge react and react-redux
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen'>
      <div className='w-ful block'>
        <Header />
        <main>
          {/* Outlet */}
        </main>
        <Footer />
      </div>

    </div>
  ) : (null)
}
export default App
