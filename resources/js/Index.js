import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import Header from "./components/Header";
import Dashboard from './Pages/Dashboard';
import Schedule from "./Pages/Schedule";
import Working_hours from "./Pages/Working_hours";
import "./../css/app.css";
import Requests from "./Pages/Requests";
import RequestForm from "./components/RequestForm";
import Notifications from "./Pages/Notifications";


function Index() {
    return (
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/home" element={<Dashboard /> } />
                    <Route path="/dashboard" element={<Dashboard /> } />
                    <Route path="/schedule" element={<Schedule /> } />
                    <Route path="/requests" element={<Requests /> } />
                    <Route path="/working_hours" element={<Working_hours /> } />
                    <Route path="/notifications" element={<Notifications /> } />
                </Routes>
            </BrowserRouter>
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index/>, document.getElementById('index'));
}
