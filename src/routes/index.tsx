import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import TimeLine from '../pages/TimeLine'
import { PrivateRoutes } from './privateRoutes'

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<PrivateRoutes />}>
          <Route path='/home' element={<Home />} />
        </Route>
        <Route path='/timeline' element={<PrivateRoutes />}>
          <Route path='/timeline' element={<TimeLine />} />
        </Route>
      </Routes>
    </Router>
  )
}
