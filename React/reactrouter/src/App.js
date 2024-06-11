import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import User from './component/User';
import OldBooks from './component/OldBooks';
import NewBooks from './component/NewBook';
import Login from './component/Login';
import Dashboard from './component/Dashboard';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/contact-us'>Contact Us</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/user/1'>User 1</Link></li>
            <li><Link to='/book-type/old-books'>Old Books</Link></li>
            <li><Link to='/book-type/new-books'>New Books</Link></li>
            <li><Link to='/login'>Login</Link></li>
          </ul>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact-us' element={<Contact/>} />
            <Route path='/user/:id' element={<User/>} />
            <Route path='book-type'>
               <Route path='old-books' element={<OldBooks/>} />
               <Route path='new-books' element={<NewBooks/>} />
            </Route>
            <Route path='/login' element={<Login/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
