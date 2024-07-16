import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Categories from './pages/categories/Categories';
import Productdetails from './pages/Productdeatils/Productdetails';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchcategories } from './redux/categorySllice';
import Payments from './components/payments/payments';

function App() {
  const dispatch = useDispatch();
  // here we dispatch the fetchcategorie data and we can use it anywhere
  useEffect(()=>{
    dispatch(fetchcategories())
  },[])
  return (
    <div className="App">
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category/:categoryid?" element={<Categories/>}/>
        <Route path="/products/:productid" element={<Productdetails/>}/>
        <Route path="/payments/:status?" element={<Payments/>}/>
      </Routes>
      <Footer/> 
      
    </div>
  );
}

export default App;
