import { useEffect, useState } from 'react';
import './App.css';
import AppRoute from './routes';
import { Toaster } from 'react-hot-toast';


function App() {
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
