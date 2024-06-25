import { useEffect, useState } from "react";
import "./App.css"
import Swal from "sweetalert2";

function App() {
    useEffect(() => {
        const lsUser = localStorage.getItem("user");
        setUser(!lsUser ? { ...emptyUser } : JSON.parse(lsUser));
    }, []);

    const emptyUser = {
        img: "",
        name: "",
        email: ""
    };

    const [ user, setUser ] = useState({ ...emptyUser });

    const handleInputChange = (e) => {
        setUser(user => {
            return {
                ...user,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleImageClick = () => {
        Swal.fire({
            title: "프로필 이미지 변경",
            text: "프로필 이미지를 변경하시겠습니까?",
            showCancelButton: true,
            confirmButtonText: "예",
            cancelButtonText: "아니오"
        }).then(result => {
            if(result.isConfirmed) {
                const fileElement = document.createElement("input");
                fileElement.setAttribute("type", "file");
                fileElement.click();
        
                fileElement.onchange = (e) => {
                    const file = e.target.files[0];
                    const fileReader = new FileReader();
                    fileReader.readAsDataURL(file);
        
                    fileReader.onload = (e) => {
                        setUser(user => {
                            return { 
                                ...user,
                                 img: e.target.result
                            }});
                    }
                }
            }
        })
    }

    const handleButtonClick = () => {
        localStorage.setItem("user", JSON.stringify(user));
    }

    return ( 
        <div className="main-container">
            <h1>프로필</h1>
            <div className="container">
                <div className="image-frame" onClick={handleImageClick}>
                    <img src={user.img} alt="" />
                </div>
            </div>
            <div className="input-container">
                <h5>이름</h5>
                <input name="name" value={user.name} type="text" onChange={handleInputChange} />
            </div>
            <div className="input-container">
                <h5>이메일</h5>
                <input name="email" value={user.email} type="text" onChange={handleInputChange} />
            </div>
            <button onClick={handleButtonClick}>저장</button>
        </div>
     );
}

export default App;