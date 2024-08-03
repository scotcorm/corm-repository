import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CreateRecord from './pages/CreateRecord';
import Dashboard from './pages/Dashboard';
// import DeleteRecord from './pages/DeleteRecord';
// import EditRecord from './pages/EditRecord';
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
import CreateProject from './pages/CreateProject';
import UpdateProject from './pages/UpdateProject';
import UpdateCitation from './pages/UpdateCitation';
import UpdateRecord from './pages/UpdateRecord';
import UpdateNote from './pages/UpdateNote';
import CitationPage from './pages/CitationPage';
import ScrollToTop from './components/ScrollToTop';
import NotePage from './pages/NotePage';
import RecordPage from './pages/RecordPage';
import Search from './pages/Search';
import SearchNotes from './pages/SearchNotes';
import CreateGenealogyRecord from './pages/CreateGenealogyRecord';
import UpdateGenealogyRecord from './pages/UpdateGenealogyRecord';
import GenealogyRecordPage from './pages/GenealogyRecordPage';
import SearchGenealogyrecords from './pages/SearchGenealogyrecords';
import ProjectPage from './pages/ProjectPage';
import TermsConditions from './pages/TermsConditions';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/notes' element={<Notes />} /> */}
        <Route path='/genealogy' element={<Genealogy />} />
        <Route path='/terms-conditions' element={<TermsConditions />} />

        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/searchnotes' element={<SearchNotes />} />
          <Route path='/create-citation' element={<CreateCitation />} />
          <Route
            path='/update-citation/:citationId'
            element={<UpdateCitation />}
          />
          <Route path='/create-record' element={<CreateRecord />} />
          <Route path='/update-record/:recordId' element={<UpdateRecord />} />
          <Route path='/create-project' element={<CreateProject />} />
          <Route
            path='/update-project/:projectId'
            element={<UpdateProject />}
          />
          <Route path='/create-note' element={<CreateNote />} />
          <Route path='/update-note/:noteId' element={<UpdateNote />} />
          <Route
            path='/create-genealogyrecord'
            element={<CreateGenealogyRecord />}
          />
          <Route
            path='/update-genealogyrecord/:genealogyrecordId'
            element={<UpdateGenealogyRecord />}
          />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        {/* <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/note' element={<Notes />} />
        </Route> */}

        <Route path='/cc-cert' element={<CcCert />} />
        <Route path='/citation-repo' element={<CitationRepo />} />
        <Route path='/digital-music' element={<DigitalMusic />} />
        {/* <Route path='/delete-record' element={<DeleteRecord />} />
        <Route path='/edit-record' element={<EditRecord />} /> */}
        <Route path='/feral-swine' element={<FeralSwine />} />
        <Route path='/genealogy' element={<Genealogy />} />
        <Route path='/terms-conditions' element={<TermsConditions />} />
        <Route path='/production-dashboard' element={<ProductionDashboard />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/project/:projectSlug' element={<ProjectPage />} />
        <Route path='/citation/:citationSlug' element={<CitationPage />} />
        <Route path='/note/:noteSlug' element={<NotePage />} />
        <Route path='/record/:recordSlug' element={<RecordPage />} />
        <Route
          path='/genealogyrecord/:genealogyrecordSlug'
          element={<GenealogyRecordPage />}
        />
        <Route path='/show-record' element={<ShowRecord />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/search' element={<Search />} />

        <Route
          path='/searchgenealogyrecords'
          element={<SearchGenealogyrecords />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
