import { useState } from 'react';
import './App.css';
import AppRoute from './routes';


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
    <div className="App">
       <AppRoute/>
    </div>
  );
}

export default App;
