import ErrorBoundary from 'components/default/errorboundary/ErrorBoundary'
import { Layout } from 'components/layout/Layout'
import React from 'react'
import { Route, Routes } from 'react-router'
import './Main.less'
import { Home } from './pages/Home/Home'

function Main() {
    return (
        <ErrorBoundary>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </Layout>
        </ErrorBoundary>
    )
}

export default Main
