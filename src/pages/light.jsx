import React from 'react';
import './light.css'; // CSS 분리

function LightPage() {
  return (
    <div className="light-page">
      <div className="content-wrapper">
        <div className="left-section">
          <div className="info-box">
            <h3>알람</h3>
            <div className="time-inputs">
              <input type="text" placeholder="취침 시간을 입력해주세요" />
              <input type="text" placeholder="기상 시간을 입력해주세요" />
            </div>
            <div className="save-toggle">
              <div className="toggle-switch">
                <div className="toggle-icon">🌙</div>
              </div>
              <button className="save-button">저장하기</button>
            </div>
          </div>

          <div className="brightness-control">
            <h3>조도 조절</h3>
            <input type="range" min="0" max="100" className="brightness-slider" />
          </div>
        </div>

        <div className="right-section">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
}

export default LightPage;
