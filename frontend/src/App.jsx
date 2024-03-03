import {  Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import SignUp from './pages/signup/SignUp';

import './App.css';

function App() {

    return (
        <div className="p-4 h-screen flex items-center justify-center">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<SignUp />} />
            </Routes>
        </div>
    );
}

export default App;