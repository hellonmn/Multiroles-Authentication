import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import SignOut from './pages/SignOut'
import PrivateRoute from './components/PrivateRoute'
import Blog from './pages/Blog'
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from './pages/AdminDashboard'
import Unauthorized from './pages/Unauthorized'
import { AuthProvider } from "./context/AuthContext";
// import Footer from './components/Footer'

const App = () => {

  // const token = !!localStorage.getItem('token');


  return (
    <>
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route 
          path='/admin' 
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
          <Route path='/profile' element={<Profile />} />
          <Route path='/sign-out' element={<SignOut />} />
        </Route>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<Register />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      {/* <Footer /> */}
      </AuthProvider>
    </>
  )
}

export default App

// {
//   token ? (
//     <>
//       <Route path='/dashboard' element={<Dashboard />} />
//       <Route path='/profile' element={<Profile />} />
//       <Route path='/sign-out' element={<SignOut />} />
//     </>
//   ) :
//     (
//       <>
//         <Route path='/' element={<Home />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/sign-up' element={<Register />} />
//       </>
//     )
// }