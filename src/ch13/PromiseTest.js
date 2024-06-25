function PromiseTest() {
    /**
     * Promise 비동기 객체
     * 프로미스의 3가지 상태
     * 1. 대기 -> 이행되지도 거부되지도 않은 상태
     * 2. 이행 -> 연산이 성공했을 때의 상태
     * 3. 거부 -> 연산을 실패했을 때의 상태
     */

    /**
     * 프로미스 정리
     * 1. 프로미스 객체는 콜백함수를 매개변수로 갖는다.
     * 2. 그 매개변수는 resolve, reject 2개를 받는다.
     * 3. 프로미스의 객체를 참조하면 then, catch, finally가 있다.
     * 4. resolve가 실행되면 then이 실행되고 reject가 실행되면 catch가 실행된다.
     * 5. resolve, reject의 각각의 매개변수는 then, catch의 매개변수가 된다.
     * 5. return이 있으면 then, throw가 있으면 catch가 실행된다.
     * 6. return값과 throw값이 각각 then, catch의 매개변수가 된다.
     * 7. then의 리턴값은 Promise
     * 8. Promise와 then은 비동기처리
     */

    function p1(name) {
        // 생성되자마자 바로 실행(함수에 넣어서 함수가 실행되면 생성, 실행)
        return new Promise((resolve, reject) => {
            // 대기(동기)
            console.log(name + "프로미스 생성");
            if(!name) {
                reject("오류!!!"); // catch로 바로감
            }
            resolve(name);
        });
    }

    // 리턴으로 promise가 옴
    async function p2() {
        let a = null;
        // await을 쓸 때 예외처리
        try {
            // await: 이행할 때까지 기다려(동기처리). 뒤의 프로미스의 리턴값을 가져옴.
            // await은 asynk안에서만 사용할 수 있고, Promise 객체에만 사용할 수 있다.
            a = await p4();
            // setTimeout(() => {}, 2000);
            await p5();
        } catch(error) {
            console.log(error);
            a = "p5";
        }
        return a;
    }
//  =
    function p3() {
        return new Promise((resolve, reject) => {
            resolve("p3");
        });
    }

    async function p4() {
        return "p4";
    }

    async function p5() {
        throw new Error("오류!!!!!");
    }

    const handleClick = () => {
        // resolve가 호출되면 then 실행, then의 콜백함수의 매개변수에는 resolve의 매개변수가 들어옴.
        p1("p1")
        .then(result => {
            console.log("이행");
            console.log(result);
            if(true) {
                throw new Error("거부!!"); // 거부(reject)
            }
            return "두번째 then"; // 이행(resolve)
        })
        // 직전의 return 값이 다음 then의 매개변수가 됨.
        .then(result => {
            console.log(result); // 두번째 then
        }).catch(error => {
            console.log(error); // 직전의 throw 값의 다음 catch의 매개변수가됨
        })
        console.log("출력1");
        p1("p2");
        console.log("출력2");
        p1("p3");
    }

    const handleClick2 = () => {
        setTimeout(() => {
            p2().then(r => {
                console.log(r);
            });
        }, 2000);
        // p3().then(r => console.log(r));
    }
    

    return ( 
        <>
            <button onClick={handleClick}>promise</button>
            <button onClick={handleClick2}>asynk</button>
        </>
     );
}

export default PromiseTest;