import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from './pages/Main';
import './scss/style.scss';
import { Route, Routes } from 'react-router-dom';
import Lessons from "./pages/Lessons";
import Groups from "./pages/Groups";
import Teachers from "./pages/Teachers";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import Contacts from "./pages/Contacts";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='lessons' element={<Lessons />}/>
        <Route path='groups' element={<Groups />}/>
        <Route path='teachers' element={<Teachers />}/>
        <Route path='gallery' element={<Gallery />}/>
        <Route path='reviews' element={<Reviews />}/>
        <Route path='contacts' element={<Contacts />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
