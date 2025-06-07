import React from 'react'
import {
    CBadge,
    CSidebar,
    CSidebarBrand,
    CSidebarHeader,
    CSidebarNav,
    CSidebarToggler,
    CNavGroup,
    CNavItem,
    CNavTitle,
} from '@coreui/react'

import { Link } from 'react-router-dom';

import CIcon from '@coreui/icons-react'
import { cilCloudDownload, cilLayers, cilPuzzle, cilSpeedometer } from '@coreui/icons'

// import RequireAuth from '../components/protected/RequireAuth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Participants from '../Participants';

function Home () {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/participantes" element={<Participants />} />
        </Routes>
    </BrowserRouter>
    )
}

export default Home;
