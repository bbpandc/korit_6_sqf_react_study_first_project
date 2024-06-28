import React, { useCallback, useMemo, useState } from 'react';

function MemoizationPage(props) {
    const [ value, setValue ] = useState(0);
    const [ value2, setValue2 ] = useState(0);
    const [ num, setNum ] = useState(0);
    
    // useMemo: 디펜던시([num]) 이 바꼈을 때 useMemo의 콜백함수의 리턴값이 변수(a)로 담긴다.
    const a = useMemo(() => {
        console.log(num);
        return num + 10;
    }, [num]);

    // 재렌더링 될때마다 연산
    const b = num + 20;

    // useCallback: 디펜던시가 바꼈을 때 useCallback의 콜백함수가 재정의 된다.
    const handleChange = useCallback((e) => {
            setValue(e.target.value);
        }, []);
        

    const handleChange2 = (e) => {
        setValue2(e.target.value);
    }

    const handleClick = useCallback(() => {
            setNum(parseInt(value));
        }, [value]);

    return (
        <div>
            <h1>{a}</h1>
            <input type="text" onChange={handleChange} />
            <input type="text" onChange={handleChange2} />
            <button onClick={handleClick}>확인</button>
        </div>
    );
}

export default MemoizationPage;