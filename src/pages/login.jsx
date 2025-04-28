import React from 'react';
import './login.css';

function LoginPage() {
  return (
    <div className="login-container">
      <h2 className="login-title">로그인</h2>
      <form className="login-form">
        <input type="text" placeholder="아이디를 입력해주세요" className="login-input" />
        <input type="password" placeholder="비밀번호를 입력해주세요" className="login-input" />
        <button type="submit" className="login-button">로그인</button>
      </form>

      <div className="divider">또는</div>

      <div className="kakao-login">
        <img src={process.env.PUBLIC_URL + '/assets/kakao_login.png'} alt="카카오 로그인" className="kakao-login-img" />
      </div>

      <div className="login-links">
        <a href="/kakao-signup">카카오로 회원가입</a>
        <a href="/signup">회원가입</a>
      </div>
    </div>
  );
}

export default LoginPage;

