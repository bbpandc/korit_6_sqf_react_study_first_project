import React from 'react';
import "./App.css"

function App(props) {
    return (
        <div className='container'>
            <h1>회원정보 수정</h1>
            <div>
                <div>이름:</div>
                <input type="text" />
            </div>
            <div>
                <div>이메일:</div>
                <input type="text" />
            </div>
            <div>
                <div>비밀번호:</div>
                <input type="text" />
            </div>
            <button>저장</button>
        </div>
    );
}

export default App;