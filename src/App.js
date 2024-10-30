import { useState } from 'react';
import './App.css';
import AppRoute from './routes';
import { Toaster } from 'react-hot-toast';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  // console.log("gg");
  

  return (
    <div className="">
       <AppRoute/>
       <Toaster
  position="top-center"
  reverseOrder={false}
 />
    </div>
  );
}

export default App;
