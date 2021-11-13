import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DetailView from '../views/DetailView'
import ListView from '../views/ListView'

export const RouterConfig = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<ListView/>} />
                <Route path='/products' element={<ListView/>} />
                <Route path='/detail' element={<DetailView/>} />
            </Routes>
        </div>
    )
}