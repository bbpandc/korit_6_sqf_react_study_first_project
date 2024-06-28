/** @jsxImportSource @emotion/react */
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import * as s from "./style";

function RouteStudySubPage1(props) {
    const navigate = useNavigate();
    const location = useLocation();

    // pathname: 주소를 가져옴
    console.log(location.pathname);
    console.log(location.pathname.lastIndexOf("/"));
    const index = location.pathname.lastIndexOf("/");
    console.log(location.pathname.substring(index + 1));

    const handleAgeClick = () => {
        // replace: 렌더링을 전부 처음부터 다시 함. (기본값 false)
        navigate("/routestudy/page1/age", {replace: true});
        // window.location.href = "https://naver.com" -> replace: false
        // window.location.replace("https://naver.com") -> replace: true
    }
    return (
        <div>
            <ul>
                <Link to={"/routestudy/page1/name"}><li>이름</li></Link>
                <Link to={"/routestudy/page1/age"}><li>나이</li></Link>
                <Link to={"/routestudy/page1/address"}><li>주소</li></Link>
            </ul>
            <button onClick={handleAgeClick}>나이</button>
            <div>
                <Routes>
                    <Route path="/name" element={<h1>김해민</h1>} />
                    <Route path="/age" element={<h1>22</h1>} />
                    <Route path="/address" element={<h1>부산</h1>} />
                </Routes>
            </div>
        </div>
    );
}

export default RouteStudySubPage1;