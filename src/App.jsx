
// router
import { Outlet } from 'react-router-dom'

// toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import NavbarComponent from './components/NavbarComponent'

function App() {
  return (
    <div>
      <NavbarComponent />
      <ToastContainer />
      <Outlet />
    </div>
  )
}

export default App
