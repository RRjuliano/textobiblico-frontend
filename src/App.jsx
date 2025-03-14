import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Loading from './components/Loading'
import { useEffect, useState } from 'react'

function App() { 

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />; 
  }


  return (
    <>
      <Navbar />
      <main className='min-h-screen max-w-screen-2x1 mx-auto px-4 py-6 bg-neutral-200 font-primary text-lg'> 
        <Outlet />
      </main>
    </>
  )
}

export default App
