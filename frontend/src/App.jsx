import './App.css'
import Login from './components/auth/Login'
import Home from './components/Home'
import Signup from './components/auth/Signup'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
// import Companies from './components/admin/Companies'
// import CompanyCreate from './components/admin/CompanyCreate'
// import CompanySetup from './components/admin/CompanySetup'



const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/jobs',
    element: <Jobs/>
  },
  {
    path: "/browse",
    element: <Browse/>
  },
  {
    path: '/profile',
    element: <Profile/>
  },
  {
    path: '/description/:id',
    element: <JobDescription/>
  },
  // for admin
  // {
  //   path: '/admin/companies',
  //   element: <Companies/>
  // },
  // {
  //   path: '/admin/companies/create',
  //   element: <CompanyCreate/>
  // },
  // {
  //   path: '/admin/companies/:id',
  //   element: <CompanySetup/>
  // }
])

function App() {

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App