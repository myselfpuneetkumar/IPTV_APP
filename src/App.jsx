import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './index.css'

import RoutesPath from './Routes'
import Footer from './Footer'
import Swal from 'sweetalert2'

function App() {


 
  const [isOnline, setIsOnline] = useState(navigator.onLine);


  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Listen to the browser network events
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Clean up listeners when the component unmounts
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
  <div >
    {/* {
    isOnline ?Swal.fire({
          title: "Success!",
          text: `You are Online`,
          icon: "success",
          confirmButtonText: "OK",
          // showConfirmButton:false
        }) :Swal.fire({
              title: "Success!",
              text: `You are Offline`,
              icon: "success",
              // confirmButtonText: "OK",
              showConfirmButton:false
            })
        } */}



   

    <RoutesPath />
    {/* <Footer /> */}
  </div>
  )
}

export default App
