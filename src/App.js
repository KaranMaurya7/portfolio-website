import { useState } from 'react';
import './App.css';
import { Navbar } from './components/Nav'
import { TransitionEffect } from './components/TransitionEffect';
import { Contact } from './pages/contact';
import { Home } from './pages/home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About } from './pages/about';
import { Projects } from './pages/projects';
import { Error } from './pages/Error';

function App() {

  // const[dark, setDark ] = useState(false);

  const [dark, setDark] = useState(() => {
    const mode = localStorage.getItem('mode');
    if (mode === 'dark') { return true; }
    return false;
  });

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar dark={dark} setDark={setDark} />,
      errorElement: <Error dark={dark}/>,
      children: [
        {
          index: true,
          element: <Home dark={dark} />
        },
        {
          path: 'about',
          element: <About dark={dark} />
        },
        {
          path: 'projects',
          element: <Projects dark={dark} />
        },
        {
          path: 'contact',
          element: <Contact dark={dark} />
        }
      ]
    }
  ])

  return (
    <div className={dark ? 'App appdark' : 'App applight'}>
      <TransitionEffect />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
