import React from 'react';
// verify if the user is authenticated and send them to sign page if not
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Outlet /> : <Navigate to='/sign-in' />;
}

// cover the private page in App.jsx with the PrivateRoute component
