/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router-dom";
import * as s from "./style";
import RouteStudyPage from "../../pages/RouteStudyPage/RouteStudyPage";
import HomePage from "../../pages/HomePage/HomePage";
import ParamsStudyPage from "../../pages/ParamsStudyPage/ParamsStudyPage";
import SearchParamsStudy from "../../pages/SearchParamsStudy/SearchParamsStudy";
import CustomHookPage from "../../pages/CustomHookPage/CustomHookPage";
import MemoizationPage from "../../pages/MemoizationPage/MemoizationPage";

function MainBody(props) {
    return (
        <div css={s.layout}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/routestudy/*" element={<RouteStudyPage />} />
                {/* ':' 뒤에 오는 name은 useParams 객체의 키값이 되고, 주소창에 name자리에 입력한 값이 밸류값이 된다. */}
                <Route path="/params/:name/*" element={<ParamsStudyPage />} />
                <Route path="/searchparams" element={<SearchParamsStudy />} />
                <Route path="/customhook/:id" element={<CustomHookPage />} />
                <Route path="memoization" element={<MemoizationPage />} />
            </Routes>
        </div>
    );
}

export default MainBody;