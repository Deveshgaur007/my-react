
import './App.css';
import Nav from './component/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/footer';
import Submit from './component/submit';
import Delete from './component/delete';
// import Update from './component/update';
import ProductList from './component/StudentList';
import Updt from './component/update';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<ProductList/>} />
          <Route path='/submit' element={<Submit/>} />
          <Route path={"/update"} element={<Updt/>} />
          <Route path='/delete' element={<Delete/>} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
