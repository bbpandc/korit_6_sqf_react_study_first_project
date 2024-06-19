import { useState } from "react";

function App() {
    const [ num, setNum ] = useState(0);
    let num2 = 0; // 재렌더링 되면 다시 0으로 초기화

    // const [ a, b ] = [ 10, 20 ];
    // const [ c, d ] = [ 10, 20 ];

    // a = 100; // 을 한다고 배열의 값 10이 변하지는 않는다.

    const handleClick = (e) => {
        const value = parseInt(e.target.value);
        // console.log(typeof value); // typeof: 뒤의 타입을 알려줌
        setNum(num + (value));
    // =
        // setNum(n => n + value); // 매개변수 n은 해당 상태의 값을 가져옴
        num2 += value;
        console.log(num2);
    }

    console.log(num);
    console.log(num2);

    return <>
            <h1>번호: {num}</h1>
            <h1>번호2: {num2}</h1>
            <button onClick={handleClick} value={-10}>-10</button>
            <button onClick={handleClick} value={+10}>+10</button>
            <button onClick={handleClick} value={-100}>-100</button>
            <button onClick={handleClick} value={+100}>+100</button>
    </>
}

export default App;