import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Deneme from './main/deneme';
import Sayfa1 from './main/sayfa1';
import Kampanyalar from './main/Kampanyalar';
import Ilan from './main/Ilan';
import Cekilis from './main/Cekilis';
import Test from './main/Test';
import Index from "./Index.jsx"
import KampanyaEkranı from './main/KampanyaEkranı';


function index() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Sayfa1 />} />
                    <Route path="/secim" element={<Deneme />} />
                    <Route path="/kampanyalar" element={<Kampanyalar />} />
                    <Route path="/ilanlar" element={<Ilan />} />
                    <Route path="/cekilis" element={<Cekilis />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/kampanya" element={<KampanyaEkranı />} />
                </Routes>
            </Router>
        </div>
    )
}

export default index
