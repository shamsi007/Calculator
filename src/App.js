import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const[result,setResult] = useState(0);
  const handleClick = (e) => {
    if (((e.target.name) === "." && result.includes("."))) {
      return;
    }
    if(result===0){
      setResult(e.target.name);
    }
    else{
      setResult(result.concat(e.target.name));
    }
  }
  const clear = () => {
    const click = document.getElementById('display').value=0;
    setResult(click);
  }
  const backspace = () => {
    setResult(result.slice(0,result.length - 1));
  }
  const calculation = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error")
    }
  } 
  return (
    <div className="container">
      <form>
        <input type="text" id='display' value={result} readOnly/>
      </form>
      <div className='keypad'>
        <button onClick={clear} id="clear">Clear</button>
        <button onClick={backspace} id="backspace">C</button>
        <button name="/" id='divide' onClick={handleClick}>&divide;</button>
        <button name="7" id='seven' onClick={handleClick}>7</button>
        <button name="8" id='eight' onClick={handleClick}>8</button>
        <button name="9" id='nine' onClick={handleClick}>9</button>
        <button name="*" id='multiply' onClick={handleClick}>&times;</button>
        <button name="4" id='four' onClick={handleClick}>4</button>
        <button name="5" id='five' onClick={handleClick}>5</button>
        <button name="6" id='six' onClick={handleClick}>6</button>
        <button name="-" id='subtract' onClick={handleClick}>-</button>
        <button name="1" id='one' onClick={handleClick}>1</button>
        <button name="2" id='two' onClick={handleClick}>2</button>
        <button name="3" id='three' onClick={handleClick}>3</button>
        <button name="+" id='add' onClick={handleClick}>+</button>
        <button name="0" id='zero' onClick={handleClick}>0</button>
        <button name="." id='decimal' onClick={handleClick}>.</button>
        <button name="=" onClick={calculation} id="equals">=</button>
      </div>
    </div>
  );
}

export default App;
