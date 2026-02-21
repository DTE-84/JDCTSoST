import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header-frame">
      <div className="rail rail-top"></div>
      
      <div className="header-body">
        <div className="rule-top">
          <div className="rule-line"></div>
          <div className="rule-ornament">Est. MMXXVI</div>
          <div className="rule-line"></div>
        </div>

        <div className="initials-container">
          <h1 className="initials">JDC</h1>
          <div className="name-block">
            <span className="full-name">Devin Cashman</span>
          </div>
        </div>

        <div className="rule-top" style={{ marginTop: '8px', marginBottom: 0 }}>
          <div className="rule-line"></div>
          <div className="rule-ornament">Life • Golf • Love</div>
          <div className="rule-line"></div>
        </div>
      </div>

      <div className="rail rail-bottom"></div>
    </header>
  );
};

export default Header;
