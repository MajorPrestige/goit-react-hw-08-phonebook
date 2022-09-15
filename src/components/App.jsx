import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { Container } from '@mui/material';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

import { current } from 'redux/auth/auth-operations';
import ServerLoader from './ServerLoader/ServerLoader';

const Contacts = lazy(() => import('pages/Contacts'));
const HomePage = lazy(() => import('pages/HomePage'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  });

  return (
    <Container fixed>
      <Suspense fallback={<ServerLoader />}>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<HomePage />}>
              <Route path="signup" element={<Register />}></Route>
              <Route path="login" element={<Login />}></Route>
            </Route>
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
};
