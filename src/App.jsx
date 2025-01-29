import {useState, useEffect} from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [advice, setAdvice] = useState("")

    const adviceMe = async () => {
        const res = await fetch('https://api.adviceslip.com/advice')
        const data = await res.json();
        setAdvice(data.slip.advice);
    }

    useEffect(() => {
        adviceMe()
    }, [advice])

    return (
        <>
            <h2>Advice ME</h2>
            <div>
                <p>{advice}</p>
                <button onClick={adviceMe}>Click here for more</button>
            </div>
        </>
    )
}

export default App
