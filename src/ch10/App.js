import { useRef, useState } from "react";
import "./App.css"

function App() {
    const inputRef = {
        username: useRef(),
        password: useRef(),
        name: useRef()
    }

    const emptyUser = {
        username: "",
        password: "",
        name: ""
    }

    const [ user, setUser ] = useState({...emptyUser});
    const [ userList, setUserList ] = useState([]);

    const handleKeyDown = (e) => {
        if(e.keyCode === 13) {
            if(e.target.name === "username") {
                inputRef.password.current.focus();
            }
            if(e.target.name === "password") {
                inputRef.name.current.focus();
            }
            if(e.target.name === "name") {
                setUserList(userList => [ ...userList, user ]);
                setUser({...emptyUser});
                inputRef.username.current.focus();
            }
        }
    }

    const handleKeyChange = (e) => {
        setUser(user => {
            return {
                ...user,
                [e.target.name]: e.target.value
            }
        })
    }
    
    return <>
        {/* 
            1. 입력후에 엔터를 입력하면 다음 input으로 포커스 이동
            2. name 필드에서 엔터를 입력하면 user객체 추가
                그리고 input value들 초기화
        */}
        <input name="username" placeholder="사용자명" onKeyDown={handleKeyDown} onChange={handleKeyChange} value={user.username} ref={inputRef.username}/>
        <input name="password" placeholder="비밀번호" onKeyDown={handleKeyDown} onChange={handleKeyChange} value={user.password} ref={inputRef.password}/>
        <input name="name" placeholder="이름" onKeyDown={handleKeyDown} onChange={handleKeyChange} value={user.name} ref={inputRef.name}/>
        {/* 3. tbody -> tr 묶음을 userList에서 map을 통해 렌더링
            4. table 디자인 -> border: 1px solid #dbdbdb; */}
        <table>
            <thead>
                <tr>
                    <th>index</th>
                    <th>username</th>
                    <th>password</th>
                    <th>name</th>
                </tr>
            </thead>
            <tbody>
                { userList.map((user, index) =>
                        <tr>
                        <td key={index}>{index}</td>
                        <td key={index}>{user.username}</td>
                        <td key={index}>{user.password}</td>
                        <td key={index}>{user.name}</td>
                        </tr>) }
            </tbody>
        </table>
    </>
}

export default App;