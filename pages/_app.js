import { createContext, useState } from 'react'
import '../styles/globals.css'


export const userContext = createContext()

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState({})
  return <userContext.Provider value={[user, setUser]}>
    <Component {...pageProps} />
  </userContext.Provider>
}
