import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { 
  createBrowserRouter, 
  createRoutesFromElements,
  Route,
  RouterProvider, 
} from 'react-router-dom'
import store from './store.js'
import { Provider } from 'react-redux'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './screens/HomeScreen.jsx'
import LoginScreen from './screens/LoginScreen.jsx'
import RegisterScreen from './screens/RegisterScreen.jsx'
import ProfileScreen from './screens/ProfileScreen.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Home />}/>
      <Route path='/login' element={<LoginScreen />}/>
      <Route path='/register' element={<RegisterScreen />}/>
      <Route path='' element={<PrivateRoute />}>
       <Route path='/profile' element={<ProfileScreen />}/>
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </Provider>
)
