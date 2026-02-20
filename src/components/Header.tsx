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
          <div className="rule-ornament">Tavern • Golf • Wealth</div>
          <div className="rule-line"></div>
        </div>
      </div>

      <div className="rail rail-bottom"></div>
      
      <style>{`
        .header-frame {
          position: relative;
          width: 100%;
          z-index: 100;
          background: linear-gradient(180deg,
            #0e0804 0%,
            #160c05 6%,
            #1e1107 12%,
            #28160a 22%,
            #1e1007 38%,
            #231308 52%,
            #1a0e06 68%,
            #130b04 82%,
            #0c0703 100%
          );
          box-shadow: 0 10px 30px rgba(0,0,0,0.8);
        }

        .header-frame::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            179deg,
            transparent 0px, transparent 9px,
            rgba(0,0,0,0.15) 9px, rgba(0,0,0,0.15) 10px,
            transparent 10px, transparent 20px,
            rgba(100,55,15,0.05) 20px, rgba(100,55,15,0.05) 22px,
            transparent 22px, transparent 34px,
            rgba(0,0,0,0.1) 34px, rgba(0,0,0,0.1) 35px
          );
          z-index: 0;
          pointer-events: none;
        }

        .header-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 85% 100% at 50% 50%,
            transparent 30%,
            rgba(0,0,0,0.6) 100%
          );
          z-index: 0;
          pointer-events: none;
        }

        .rail {
          position: relative;
          z-index: 5;
          height: 6px;
          width: 100%;
        }

        .rail-top {
          background: linear-gradient(180deg,
            #100a02 0%, #2e1e04 20%, #4a3006 45%, #5a3c08 60%, #3a2605 78%, #1a1002 100%
          );
          border-bottom: 1px solid rgba(212, 175, 55, 0.3);
        }

        .rail-bottom {
          background: linear-gradient(180deg,
            #1a1002 0%, #3a2605 22%, #523608 45%, #3e2a06 65%, #241804 82%, #100a02 100%
          );
          border-top: 1px solid rgba(212, 175, 55, 0.3);
        }

        .header-body {
          position: relative;
          z-index: 3;
          padding: 15px 40px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .rule-top {
          display: flex;
          align-items: center;
          width: 100%;
          max-width: 600px;
          gap: 0;
          margin-bottom: 6px;
        }

        .rule-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(180, 130, 25, 0.4) 40%,
            rgba(212, 175, 55, 0.8) 50%,
            rgba(180, 130, 25, 0.4) 60%,
            transparent 100%
          );
        }

        .rule-ornament {
          padding: 0 15px;
          font-size: 0.5rem;
          color: #d4af37;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          font-family: 'Cinzel', serif;
          opacity: 0.8;
        }

        .initials-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .initials {
          font-family: 'Cinzel', serif;
          font-weight: 700;
          font-size: clamp(2.5rem, 5vw, 4rem);
          color: transparent;
          background: linear-gradient(135deg, #c5a059 0%, #f1d38e 25%, #b38b47 50%, #f1d38e 75%, #c5a059 100%);
          background-clip: text;
          -webkit-background-clip: text;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.8));
          line-height: 1;
          margin-bottom: 0.1rem;
        }

        .full-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem;
          font-weight: 400;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          display: block;
          color: #d4af37;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
      `}</style>
    </header>
  );
};

export default Header;
