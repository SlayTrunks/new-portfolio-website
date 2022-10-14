import Layout from './components/Layout';
// import Sidebar from './components/Sidebar';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import About from './components/About'
import Error from './components/Error'
import Home from './components/Home';
import Contact from './components/Contact'
// import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
    <Layout />
    {/* <Sidebar/> */}
    <Routes>
    
    <Route path='/' element={<Home/>} />
    {/* <Route indexelement={<Home/>} /> */}
    <Route path='/about' element={<About/>}  />
    <Route path='/contact' element={<Contact />}></Route>
    <Route path='*' element={<Error/>}  />
    </Routes>
    
    
    </>
  );
}

export default App;
