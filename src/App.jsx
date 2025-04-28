import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";  
import WindowPage from "./pages/window";
import LightPage from "./pages/light";
import AlarmPage from "./pages/alarm";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import MyPage from "./pages/my";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/window" />} />
        
        {/* 모든 페이지 Layout으로 감싸기 */}
        <Route element={<Layout />}>
          <Route path="/window" element={<WindowPage />} />
          <Route path="/light" element={<LightPage />} />
          <Route path="/alarm" element={<AlarmPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/my" element={<MyPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
