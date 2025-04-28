/*
import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <img 
          src={process.env.PUBLIC_URL + '/assets/homiLogo.png'}
          alt="로고" 
          className="logo" 
        />
        <div className="auth-links">
          <span className="login">로그인</span>
          <span className="signup">회원가입</span>
          <span className="my">My</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
*/

import React from 'react';
import { Link } from 'react-router-dom'; // Link 추가
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <img 
          src={process.env.PUBLIC_URL + '/assets/homiLogo.png'}
          alt="로고" 
          className="logo" 
        />
        <div className="auth-links">
          <Link to="/login" className="login">로그인</Link> {/* Link로 변경 */}
          <Link to="/signup" className="signup">회원가입</Link> {/* Link로 변경 */}
          <Link to="/my" className="my">My</Link> {/* Link로 변경 */}
        </div>
      </div>
    </header>
  );
}

export default Header;

