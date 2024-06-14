import { useState } from "react";
import './index.css';
const Calculator= () => {
    const [input,setInput]= useState('');
    const handleClick = (value)=>{
        setInput(input + value);
    }
    const calculate = ()=>{
        try{
        setInput(eval(input).toString());
    }
    catch(error){
        setInput("error");
    }
}
const clear =()=>{
    setInput('');
}
return(
    <div className="calculator">
        <input type="text" value={input} readOnly />
        <div>
            <button onClick={()=> handleClick('1')}>1</button>
            <button onClick={()=> handleClick('2')}>2</button>
            <button onClick={()=> handleClick('+')}>+</button>
            <button onClick={calculate}>=</button>
            <button onClick={clear}>C</button>
        </div>
    </div>
)
}
export default Calculator;