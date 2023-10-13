import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './AppContext'
import ConnexionPage from './components/ConnexionPage'
import Home from './components/Home'
//import { useAppContext } from './AppContext'  



function App() {

/*   const { setIsConnected, setLogin } = useAppContext();

  if(window.localStorage.getItem("isConnected") === "true") {
    setIsConnected(true)
    setLogin(window.localStorage.getItem("login") as string)
  } else {
    setIsConnected(false)
    setLogin("")
  }   */

  return (
        <BrowserRouter>
        <AppProvider>
          <Routes>
            <Route path="/frontend" element={<ConnexionPage />} />
            <Route path="/frontend/home" element={<Home />} />
          </Routes>
        </AppProvider>
      </BrowserRouter>
  )
}

export default App
