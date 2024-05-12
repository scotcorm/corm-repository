import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CreateRecord from './pages/CreateRecord';
import Dashboard from './pages/Dashboard';
import DeleteRecord from './pages/DeleteRecord';
import EditRecord from './pages/EditRecord';
import FeralSwine from './pages/FeralSwine';
import Genealogy from './pages/Genealogy';
import ProductionDashboard from './pages/ProductionDashboard';
import Projects from './pages/Projects';
//import Notes from './pages/Notes';
import DigitalMusic from './pages/DigitalMusic';
import CcCert from './pages/CcCert';
import ShowRecord from './pages/ShowRecord';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import CitationRepo from './pages/CitationRepo';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreateCitation from './pages/CreateCitation';
import CreateNote from './pages/CreateNote';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-record' element={<CreateRecord />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-citation' element={<CreateCitation />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        {/* <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/note' element={<Notes />} />
        </Route> */}
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-note' element={<CreateNote />} />
        </Route>
        <Route path='/cc-cert' element={<CcCert />} />
        <Route path='/citation-repo' element={<CitationRepo />} />
        <Route path='/digital-music' element={<DigitalMusic />} />
        <Route path='/delete-record' element={<DeleteRecord />} />
        <Route path='/edit-record' element={<EditRecord />} />
        <Route path='/feral-swine' element={<FeralSwine />} />
        <Route path='/genealogy' element={<Genealogy />} />
        <Route path='/production-dashboard' element={<ProductionDashboard />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/show-record' element={<ShowRecord />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
