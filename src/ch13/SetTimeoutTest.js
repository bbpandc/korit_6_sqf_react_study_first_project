function SetTimeoutTest() {
    /**
     * 비동기
     */

    // 2초 뒤에 함수를 호출
    setTimeout(() => {
        print(count);
    }, 2000);

    function print(fx) {
        console.log(4);
        fx();
    }

    function count() {
        console.log(1);
        console.log(2);
        console.log(3);
    }

    /**
     * 콜백함수: 함수 안에 매개변수로 주는 함수
     */
    function test(fx) {
        console.log("test 함수 호출");
        fx();
    }

    function add() {
        console.log("add 함수 호출");
    }

    test(add);

    return ( 
        <></>
     );
}

export default SetTimeoutTest;