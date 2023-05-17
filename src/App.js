import './App.css';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Gallery from './components/Gallery';
import BookingCalendar from './components/BookingCalendar';

function App() {
  return (
        <BrowserRouter>
          <div className="App">
           <Navbar />
            <div id='page-body'>
             <Routes>
               <Route path="/" element={<Home />} exact />
               <Route path="/About" element={<About />} />
               <Route path="/Contact" element={<Contact />} />
               <Route path="/Gallery" element={<Gallery />} />
               <Route path="/Services" element={<Services />} />
               <Route path="/BookingCalendar" element={<BookingCalendar />} />
             </Routes>
            </div>
          </div>
        </BrowserRouter>
   
  );
}

export default App;
