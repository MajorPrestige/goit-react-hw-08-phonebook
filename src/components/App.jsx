import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Contacts = lazy(() => import('pages/Contacts'));
const HomePage = lazy(() => import('pages/HomePage'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="signup" element={<Register />}></Route>
            <Route path="login" element={<Login />}></Route>
          </Route>
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Suspense>
    </div>
  );
};
