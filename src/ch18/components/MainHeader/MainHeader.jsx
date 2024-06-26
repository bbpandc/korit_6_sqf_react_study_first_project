/** @jsxImportSource @emotion/react */
import MainContainer from "../MainContainer/MainContainer";
import * as s from "./style";
import { FaBars } from "react-icons/fa";

function MainHeader({ setIsMainSidebarShow }) {

    // 사이드바 여는 버튼
    const handleMainMenuToggleClick = () => {
        setIsMainSidebarShow(true);
    }

    return (
        <div css={s.layout}>
            <MainContainer>
                <div css={s.headerBody}>
                    <button 
                        css={s.menuToggleButton} 
                        onClick={handleMainMenuToggleClick}
                    >
                        <FaBars />
                    </button>
                </div>
            </MainContainer>
        </div>
    );
}

export default MainHeader;