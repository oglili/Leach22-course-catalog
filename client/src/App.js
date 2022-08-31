import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing, Error, Register, ProtectedRoute } from './pages';
import {
  AddCourse,
  AllCourses,
  Profile,
  SharedLayout,
  Stats,
  TotalCourses,
} from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path='add-course' element={<AddCourse />}></Route>
          <Route path='all-courses' element={<AllCourses />}></Route>
          <Route path='total-courses' element={<TotalCourses />}></Route>
          <Route path='profile' element={<Profile />}></Route>
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
