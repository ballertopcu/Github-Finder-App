import React ,{useState,useEffect} from 'react'
import ReactDOM from "react-dom"

const App = (props)=>{

    const [count,setCount] = useState(props.count);
    const [text,setText] = useState(props.text)

    useEffect(()=>{
        console.log("text")
    },[text])

    useEffect(()=>{
        console.log("count")
        localStorage.setItem("count",count)
    },[count])

    useEffect(()=>{
        console.log("componentDidMount")
        const countData = localStorage.getItem("count")
        if(countData){
            setCount(Number(countData))
        }
    },[])

    useEffect(()=>{
        console.log("componentDidMount-componentDidUpdate")
    },)


    return (
        <div>
            <p>Butona {count} Kez Tıkladınız</p>
            <p>Girilen Text: {text}</p>
            <button onClick={()=>setCount(count+1)}>+1</button>
            <button onClick={()=>setCount(count-1)}>-1</button>
            <button onClick={()=>setCount(props.count)}>Reset</button>
            <p><input type="text" value={text} onChange={(e)=>setText(e.target.value)}/></p>
        </div>
    )

}

App.defaultProps = {
    count : 5,
    text : ""
}

ReactDOM.render(<App/>,document.getElementById("root"))