import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './contexts/theme'



function App() {

  const [loading, setLoading] = useState(true)

  //dispatch is used to merge react and react-redux
  const dispatch = useDispatch()


  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          console.log(userData)
          dispatch(login({ userData }))
        }
        else {
          dispatch(logout({}))
        }
      })
      .catch((error) => {
        console.log('Appwirte service :: getCurrentUser :: error ', error)
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (

    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="min-h-screen flex flex-wrap content-between bg-brand-light dark:bg-brand-dark transition-colors duration-300">
        <div className="w-full block">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>

      </div>
    </ThemeProvider>
  ) : (null)
}
export default App
