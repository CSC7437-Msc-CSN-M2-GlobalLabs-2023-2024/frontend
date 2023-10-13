//import { useAppContext } from "../AppContext"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

const TopNav = () => {

    //const { isConnected, setIsConnected, login, setLogin } = useAppContext();
    const modaleLoginRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    const navigate = useNavigate();

    const handleClickProfile = () => {
        if(modaleLoginRef.current != null){
            if(modaleLoginRef.current.style.display === "flex"){
                modaleLoginRef.current.style.display = "none"
            } else {
                modaleLoginRef.current.style.display = "flex"
            }
        }
    }


    const handleDeconnexion = () => {
        window.localStorage.removeItem("login")
        window.localStorage.removeItem("isConnected")
        window.localStorage.removeItem("tokenJWT")
        navigate("/frontend/")
    }


    return (
        <nav className="fixed flex p-4 top-0 w-full z-50 justify-between bg-slate-200 drop-shadow-md bg-opacity-30 backdrop-blur-md content-center">
            <a className="w-fit h-fit no-underline flex place-self-center hover:scale-110 duration-150" href="/frontend/">
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="2">
                    <path d="M45.08 20.25h4.5a2.89 2.89 0 0 1 2.89 2.9v12M36.5 20.26a3.43 3.43 0 0 0 6.3 1.86 3.29 3.29 0 0 0 .56-1.86 3.35 3.35 0 0 0-.56-1.87 3.43 3.43 0 0 0-6.3 1.87zM86.15 47.8A8.14 8.14 0 0 1 80 55.66v-4.28a4 4 0 0 1-2 .53 4.11 4.11 0 0 1-2-.52v4.27a8.12 8.12 0 1 1 8.81-12.29 8 8 0 0 1 1.34 4.43z"/><path d="M82.15 47.8a3.94 3.94 0 0 1-.67 2.2A4.17 4.17 0 0 1 78 51.91a4.12 4.12 0 1 1 3.45-6.36 4 4 0 0 1 .7 2.25zM43.36 20.26a3.29 3.29 0 0 1-.56 1.86H44a1.31 1.31 0 0 0 1.31-1.3v-1.13a1.31 1.31 0 0 0-1.31-1.3h-1.2a3.35 3.35 0 0 1 .56 1.87zm-20.11-.01h-4.5a2.9 2.9 0 0 0-2.9 2.9v12m15.97-14.89a3.43 3.43 0 0 1-6.3 1.86 3.29 3.29 0 0 1-.52-1.86 3.35 3.35 0 0 1 .56-1.87 3.43 3.43 0 0 1 6.3 1.87z"/><path d="M25 20.26a3.29 3.29 0 0 0 .56 1.86H24.3a1.31 1.31 0 0 1-1.3-1.3v-1.13a1.31 1.31 0 0 1 1.31-1.3h1.22a3.35 3.35 0 0 0-.53 1.87zm55 31.12v7.85a23.94 23.94 0 1 1-47.87 0v-1.38a20.33 20.33 0 0 1-18.31-20.2v-.53a2 2 0 0 1 4 0v.53a16.31 16.31 0 0 0 32.62 0v-.53a2 2 0 0 1 4 0v.53a20.33 20.33 0 0 1-18.31 20.2v1.38a19.94 19.94 0 1 0 39.87 0v-7.84a4.11 4.11 0 0 0 2 .52 4 4 0 0 0 2-.53z"/>
                </svg>
            </a>
            {
                window.localStorage.getItem("isConnected") === "true" ?
                
                <svg onClick={handleClickProfile} className="flex self-center rounded-full p-2 cursor-pointer bg-slate-300 hover:bg-teal-400" width="40" height="40" viewBox="-5 -5 30 30" >
                    <path d="M10 10c-2.217 0-4.019-1.794-4.019-4S7.783 2 10 2s4.019 1.794 4.019 4-1.803 4-4.019 4m3.776.673C15.37 9.396 16.3 7.331 15.958 5.07 15.561 2.447 13.369.348 10.722.042 7.07-.381 3.971 2.449 3.971 6c0 1.89.88 3.574 2.253 4.673C2.852 11.934.39 14.895.005 18.891-.052 19.482.412 20 1.008 20a.99.99 0 0 0 .993-.891C2.404 14.646 5.837 12 10 12s7.596 2.646 7.999 7.109a.99.99 0 0 0 .993.891c.597 0 1.06-.518 1.004-1.109-.386-3.996-2.847-6.957-6.219-8.218" fillRule="evenodd"/>
                </svg>

                :
                null
            }
            <div ref={modaleLoginRef} className="hidden flex-col absolute p-4 gap-4 right-2 top-24 rounded-sm bg-teal-400">
                <p>Hello {window.localStorage.getItem("login")} !</p>
                <button onClick={handleDeconnexion} className="flex p-1 h-fit w-fit bg-slate-200 hover:bg-slate-300 duration-150 transition-colors rounded-sm self-center">Logout</button>
            </div>
        </nav>
    )
}

export default TopNav