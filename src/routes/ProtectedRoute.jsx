import React from 'react';
import { useRecoilValue } from 'recoil';
import { isLoginSelector } from '../recoil/TokenAtom';
import { Outlet, Navigate, useLocation } from 'react-router';

export default function ProtectedRoute() {
  const isLogin = useRecoilValue(isLoginSelector);
  const currentLocation = useLocation();
  return isLogin ? (
    <Outlet />
  ) : (
    <Navigate
      to={'/login'}
      replace
      state={{ redirectedFrom: currentLocation }}
    />
  );
}
