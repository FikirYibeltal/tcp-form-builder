import React from 'react'
import { Route, Routes } from 'react-router'
import './Main.less'
import { Home } from './pages/Home/Home'

function Main() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export default Main
