import { useState } from 'react'
import Layout from './Layout'
//import { useAppContext } from '../AppContext'

const Home = () => {

    //const { isConnected, setIsConnected } = useAppContext();
    //window.localStorage.getItem("isConnected") === "true" ? setIsConnected(true) : setIsConnected(false)

    if(window.localStorage.getItem("isConnected") !== "true"){
        window.location.href = "/frontend/"
        return null
    }

    const [count, setCount] = useState(0)

    return(
        <Layout>
            <div className="flex flex-col bg-slate-200 place-content-center place-items-center gap-16 w-full overflow-scroll">
                <p>Welcome to the global lab frontend home template!</p>
                <button className="flex bg-blue-400 w-fit p-2 rounded-lg" onClick={() => setCount(count + 1)}>Click me {count}</button>
            </div>
        </Layout>
    )
}

export default Home