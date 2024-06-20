import { useState } from "react";

function App() {
    // inputValue
    const [ inputValue, setInputValue ] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleResetClick = () => {
        setInputValue("");
    }

    return <>
        <h3>값: {inputValue}</h3>
        <button onClick={handleResetClick}>초기화</button>
        {/* onChange: value의 값이 바뀔 때 동작 */}
        <input type="text" onChange={handleInputChange} value={inputValue}/>
    </>
}

export default App;