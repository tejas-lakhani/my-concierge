import { useEffect, useState } from 'react';
import './App.css';
import AppRoute from './routes';
import { Toaster } from 'react-hot-toast';


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
       <AppRoute/>
       <Toaster
  position="top-center"
  reverseOrder={false}
 />
    </div>
  );
}

export default App;
