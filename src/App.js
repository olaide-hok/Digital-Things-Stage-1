import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import ContactPage from './Pages/ContactPage';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <BrowserRouter>
      <div className='main'>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/contact' element={<ContactPage/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
