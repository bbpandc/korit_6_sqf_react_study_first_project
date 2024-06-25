import { useState } from "react";

function App() {
    const [ imgSrc, setImgSrc ] = useState("");

    const handleLoadImgClick = () => {
        const fileElement = document.createElement("input");
        fileElement.setAttribute("type", "file");
        // 파일 중복 선택 가능
        // fileElement.setAttribute("multiple", true);
        fileElement.click();
        
        fileElement.onchange = (e) => {
            const file = e.target.files[0];

            const fileReader = new FileReader();

            fileReader.onload = (e) => {
                setImgSrc(e.target.result);
            }

            fileReader.readAsDataURL(file);
        }
    }

    return ( 
        <>
            <button onClick={handleLoadImgClick}>이미지 불러오기</button>
            <input type="file" multiple={false}/>
            <div>
                <img src={imgSrc} alt="" />
            </div>
        </>
    );
}

export default App;