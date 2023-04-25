import React from 'react';
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {
    Area,
    Bar,
    Calendar,
    ColorMapping,
    ColorPicker,
    Customers,
    Ecommerce,
    Editor, Financial,
    Kanban,
    Line,
    Orders,
    Pie, Pyramid, Stacked
} from "./pages";


function App() {

    return (
        <BrowserRouter>
            <div>
                <h1 className='underline text-3xl'>React Admin Dashbooard</h1>
            </div>
            <div>
                <Routes>
                    <Route path='/' element={<Ecommerce/>}/>
                    <Route path='/orders' element={<Orders/>}/>
                    <Route path='/customers' element={<Customers/>}/>
                    <Route path='/calendar' element={<Calendar/>}/>
                    <Route path='/kanban' element={<Kanban/>}/>
                    <Route path='/editor' element={<Editor/>}/>
                    <Route path='/color-picker' element={<ColorPicker/>}/>
                    <Route path="/line" element={<Line/>}/>
                    <Route path="/area" element={<Area/>}/>
                    <Route path="/bar" element={<Bar/>}/>
                    <Route path="/pie" element={<Pie/>}/>
                    <Route path="/financial" element={<Financial/>}/>
                    <Route path="/color-mapping" element={<ColorMapping/>}/>
                    <Route path="/pyramid" element={<Pyramid/>}/>
                    <Route path="/stacked" element={<Stacked/>}/>

                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
