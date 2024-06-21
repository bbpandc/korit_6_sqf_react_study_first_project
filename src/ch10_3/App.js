import { useRef, useState } from "react";
import "./App.css"
import Swal from "sweetalert2";

function App() {
    const test = {
        a: "aaa",
        b: "bbb"
    }
    console.log(test.a); // aaa
    console.log(test["a"]); // aaa

    const emptyUser = {
        username: "",
        password: "",
        name: ""
    }
    const [ userList, setUserList ] = useState([]);
    const [ inputData, setInputData ] = useState({...emptyUser});

    const inputRef = {
        username: useRef(),
        password: useRef(),
        name: useRef()
    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            const { username, password, name } = inputRef;
            switch(e.target.name) {
                case "username":
                    password.current.focus();
                    break;
                case "password":
                    name.current.focus();
                    break;
                case "name":
                    username.current.focus();
                    setUserList(userList => [ ...userList, inputData ]);
                    setInputData({...emptyUser});
                    break;
                default:
            }
        }
    }

    const handleInputChange = (e) => {
        setInputData(inputData => {
            return {
                ...inputData,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleEditClick = (key, index) => {
        Swal.fire({
            title: `${key} edit`,
            input: "text",
            // 배열[인덱스번호]: 그 인덱스번호 자리의 밸류 가져오기, 객체[키값]: 그 키값의 밸류 가져오기
            inputValue: userList[index][key],
            showCancelButton: true,
            cancelButtonText: "취소",
            confirmButtonText: "확인"
        }).then(result => {
            if(result.isConfirmed) {
                // console.log(result); // 스프레드는 리턴값에 적용
                setUserList(userList => [ ...userList.map((user, i) => {
                    if(i === index) {
                        return {
                            ...user,
                            [key]: result.value
                        }
                    }
                    return user;
                }) ]);
            }
        });
    }

    const handleDeleteClick = (e) => {
        Swal.fire({
            title: "사용자 삭제",
            text: "해당 사용자를 삭제하시겠습니까?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "삭제",
            confirmButtonColor: "red",
            cancelButtonText: "취소"
        }).then(result => {
            if(result.isConfirmed) {
                                        // 스프레드는 리턴값에 적용
                setUserList(userList => [ ...userList.filter((user, index) => index !== parseInt(e.target.value)) ]);
            }
        });

        // react 에서는 confirm 등을 쓸 때 window.~
        // if(window.confirm("해당 사용자를 삭제하시겠습니까?")) {
        //     setUserList(userList => [ ...userList.filter((user, index) => index !== parseInt(e.target.value)) ])
        // }
    }
    
    return <>
        {/* 
            1. 입력후에 엔터를 입력하면 다음 input으로 포커스 이동
            2. name 필드에서 엔터를 입력하면 user객체 추가
                그리고 input value들 초기화
        */}
        <input name="username" placeholder="사용자명" 
        onKeyDown={handleInputKeyDown}
        onChange={handleInputChange}
        value={inputData.username}
        ref={inputRef.username}/>
        <input name="password" placeholder="비밀번호" 
        onKeyDown={handleInputKeyDown}
        onChange={handleInputChange}
        value={inputData.password}
        ref={inputRef.password}/>
        <input name="name" placeholder="이름" 
        onKeyDown={handleInputKeyDown}
        onChange={handleInputChange}
        value={inputData.name}
        ref={inputRef.name}/>
        {/* 3. tbody -> tr 묶음을 userList에서 map을 통해 렌더링
            4. table 디자인 -> border: 1px solid #dbdbdb; */}
        <table>
            <thead>
                <tr>
                    <th>index</th>
                    <th>username</th>
                    <th>password</th>
                    <th>name</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    userList.map(({ username, password, name }, index) => {
                        return (
                            <tr key={index}>
                                {/* td는 name, value가 존재하지x */}
                                <td>{index + 1}</td>
                                <td  onClick={() => handleEditClick("username", index)}>{username}</td>
                                <td  onClick={() => handleEditClick("password", index)}>{password}</td>
                                <td  onClick={() => handleEditClick("name", index)}>{name}</td>
                                <td>
                                    <button value={index}>edit</button>
                                </td>
                                <td>
                                    <button onClick={handleDeleteClick} value={index}>delete</button>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    </>
}

export default App;