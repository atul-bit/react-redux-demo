import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Protected from './components/Protected';
import Login from './components/Login'
import Home from './components/Home'
import Products from './containers/ProductContainer';
import Users from './containers/UsersContainers'
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ="/" element ={<Protected Component={Home} />} />
          <Route path ="/products" element ={<Protected Component={Products} />} />
          <Route path ="/login" element ={<Login />} />
          <Route path ="/test" element = { <Test />} />
          <Route path ="/users" element = { <Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
