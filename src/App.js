import { Provider } from 'react-redux';
import Body from './Components/Body';
import Head from './Components/Head';
import './index.css'; 
import React from 'react'
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';
import Demo from './Components/Demo';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    {path: "/",
    element: <MainContainer/>
},
{path: "watch",
  element: <WatchPage/>,
},
{
  path:"demo",
  element: <Demo/>
}
    
]}
])

const App = () => {
  return (
    <Provider store = {store}>
    <div>
      <Head/>
      <RouterProvider router={appRouter}/>

    </div>
    </Provider>
  )
}

export default App
