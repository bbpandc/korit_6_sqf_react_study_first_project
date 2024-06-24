import { useEffect, useState } from "react";

function App() {
    const [ number, setNumber ] = useState(0);
    const [ number2, setNumber2 ] = useState(0);
    const [ number3, setNumber3 ] = useState(0);

    // userEffect의 매개변수 2개(함수, 배열(디펜던시))
    // 처음 한 번은 무조건 실행된다. 그 후에 배열 안의 상태가 변하면 함수가 실행된다.
    // useEffect(() => {}, []);
    useEffect(() => {
        // 마운트 지점
        console.log(number2);
        setNumber3(number * 10);
        return () => {
            // 언마운트 지점
        }
        // 디펜던시를 여러 개 넣으면 그 중 하나의 상태가 변하면 함수 실행
    }, [number, number2]);

    const handleButtonClick = (e) => {
        setNumber(a => a + 1);
    }

    const handleButtonClick2 = (e) => {
        setNumber2(b => b + 10);
    }

    return ( 
        <>
            <h1>{number}</h1>
            <h1>{number2}</h1>
            <h1>{number3}</h1>
            <button onClick={handleButtonClick}>num1 증가</button>
            <button onClick={handleButtonClick2}>num2 증가</button>
        </>
     );
}

export default App;