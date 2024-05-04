import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CreateRecords from './pages/CreateRecords';
import Dashboard from './pages/Dashboard';
import DeleteRecord from './pages/DeleteRecord';
import EditRecord from './pages/EditRecord';
import FeralSwine from './pages/FeralSwine';
import Genealogy from './pages/Genealogy';
import ProductionData from './pages/ProductionData';
import Projects from './pages/Projects';
import ShowRecord from './pages/ShowRecord';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/create-records' element={<CreateRecords />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/delete-record' element={<DeleteRecord />} />
        <Route path='/edit-record' element={<EditRecord />} />
        <Route path='/feral-swine' element={<FeralSwine />} />
        <Route path='/genealogy' element={<Genealogy />} />
        <Route path='/production-data' element={<ProductionData />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/show-record' element={<ShowRecord />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
