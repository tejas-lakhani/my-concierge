import { useEffect, useState } from 'react';
import './App.css';
import AppRoute from './routes';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const token = localStorage.getItem("token");
  console.log("token", token, isAuthenticated)


  // useEffect(() => {
  //   if (token) {
  //     setIsAuthenticated(true)
  //   } else {
  //     setIsAuthenticated(false)
  //   }
  // }, [token])



  return (
    <div className="">
      <AppRoute  />
    </div>
  );
}

export default App;
