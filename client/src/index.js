import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import NoPage from './components/Nopage'


const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

