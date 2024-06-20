import { useState } from "react";

function App() {
    const [ inputValue, setInputValue ] = useState("");
    const [ names, setNames ] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            setNames(names => [ ...names, inputValue ]);
            setInputValue("");
        }
    }

    return <>
        <input 
            onChange={handleInputChange} 
            onKeyDown={handleInputKeyDown} 
            value={inputValue}/>
        <ul>
            {/* key값 잡아주기 */}
            {names.map((name, index) => <li key={index}>{name}</li>)}
        </ul>
    </>
}

export default App;