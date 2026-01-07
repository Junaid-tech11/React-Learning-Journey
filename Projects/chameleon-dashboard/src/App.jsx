import { useEffect } from "react"
import { ThemeProvider } from "./Contexts/Theme"
import { useState } from "react"
import ThemeBtn from "./components/ThemeBtn"
import Card from "./components/Card"
import { UserProvider } from "./Contexts/UserContext"

import Login from "./components/Login"





export default function App() {
  const [themeMode, setThemeMode] = useState("light")
  const [user, setUser] = useState(null)

  const login = (userData) => {
    setUser(userData)
  }

  const logout = () => {
    setUser(null)
  }


  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", 'dark')
    document.querySelector('html').classList.add(themeMode)

  }, [themeMode])


  return (
    <UserProvider value={{ user, login, logout }}>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>

        {/* 🎨 UPGRADE 1: The Background Gradient 
          Light: Blue-to-Purple fade
          Dark: Deep Gray-to-Black fade 
      */}
        <div className="flex flex-col min-h-screen transition-colors duration-500 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-black">

          {/* 🧠 THE GUARD */}
          {user ? (
            <>
              {/* 🎨 UPGRADE 2: The Glass Header (Navbar) */}
              <nav className="w-full flex justify-between items-center px-8 py-4 backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-white/20 dark:border-gray-700 sticky top-0 z-50">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Chameleon<span className="text-indigo-600 dark:text-indigo-400">Dash</span> 🦎
                </h1>

                <div className="flex items-center gap-4">
                  <ThemeBtn />
                  <button
                    onClick={logout}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-transform active:scale-95"
                  >
                    Logout
                  </button>
                </div>
              </nav>

              {/* The Main Content Area */}
              <main className="flex-grow flex items-center justify-center p-4">
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <Card />
                </div>
              </main>
            </>
          ) : (
            /* The Login Page (Centered) */
            <div className="flex-grow flex items-center justify-center">
              <Login />
            </div>
          )}

        </div>

      </ThemeProvider>
    </UserProvider>
  )
}