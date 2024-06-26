import React, { useState } from 'react';
import MainLayout from './components/MainLayout/MainLayout';
import MainSidebar from './components/MainSidebar/MainSidebar';
import MainHeader from './components/MainHeader/MainHeader';
import { Global } from '@emotion/react';
import { reset } from './styles/global';
import MainBody from './components/MainBody/MainBody';

function App(props) {
    const [ isMainSidebarShow, setIsMainSidebarShow ] = useState(false);

    return (
        <>
            <Global styles={reset}/>
            <MainLayout>
                <MainHeader setIsMainSidebarShow={setIsMainSidebarShow} />
                <MainBody />
                <MainSidebar
                    isMainSidebarShow={isMainSidebarShow}
                    setIsMainSidebarShow={setIsMainSidebarShow}
                />
            </MainLayout>
        </>
    );
}

export default App;