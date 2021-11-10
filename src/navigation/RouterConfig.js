import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ListView from '../views/ListView'

export const RouterConfig = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<ListView/>} />
                <Route path='/products' element={<ListView/>} />
                <Route path='/detail' element={<ListView/>} />
            </Routes>
        </div>
    )
}