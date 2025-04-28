import React from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Header from "./header";  // 경로 맞춰줘야 해
import NavBar from "./navibar"; // 경로 맞춰줘야 해

function Layout() {
  const location = useLocation();
  const hideNavPaths = ['/login', '/signup', '/my'];

  return (
    <>
      <Header />
      {!hideNavPaths.includes(location.pathname) && <NavBar />}
      <Outlet /> {/* 자식 페이지 렌더링 자리 */}
    </>
  );
}

export default Layout;

