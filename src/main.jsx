// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './components/Store/Store.jsx' // Import your store
import Home from './components/Home/Home.jsx';
import Market  from './components/Market/Market.jsx'
import Records from './components/TrafficRecords/Records.jsx'
import Servieces from './components/Services/Services.jsx'

import Insurance from './components/Insurance/Insurance.jsx'
import Fuel from './components/Fuel/Fuel.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path:'/market',
        element:<Market/>
      },
      {
        path:'/records',
        element:<Records/>
      },{
        path:'/services',
        element:<Servieces/>
      },{
        path:'/insurance',
        element:<Insurance/>
      },{
        path:'/fuel',
        element:<Fuel/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
