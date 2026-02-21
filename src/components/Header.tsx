import React from 'react';

const RomanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII"];

interface HeaderProps {
  activeIndex: number;
  activeTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ activeIndex, activeTitle }) => {
  return (
    <header className="header-frame">
      <div className="rail rail-top"></div>
      
      <div className="header-body">
        {/* Left Side Ornament */}
        <div className="header-side-ornament left-orn">
          <div className="rule-line short"></div>
          <div className="chapter-label">
            {activeIndex === -1 ? "PROLOGUE" : `CHAPTER ${RomanNumerals[activeIndex]}`}
          </div>
        </div>

        {/* Center Logo Area */}
        <div className="header-center">
          <div className="initials-container">
            <h1 className="initials">JDC</h1>
            <span className="full-name">Devin Cashman</span>
          </div>
        </div>

        {/* Right Side Ornament */}
        <div className="header-side-ornament right-orn">
          <div className="current-story-name">
            {activeTitle || "The Sum of Small Things"}
          </div>
          <div className="rule-line short"></div>
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
          padding: 10px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 100px;
        }

        .header-side-ornament {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 20px;
          font-family: 'Cinzel', serif;
          font-size: 0.65rem;
          color: #d4af37;
          letter-spacing: 0.2em;
          opacity: 0.7;
        }

        .right-orn { justify-content: flex-end; text-align: right; }

        .rule-line.short {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.5), transparent);
        }

        .header-center {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 40px;
        }

        .initials {
          font-family: 'Cinzel', serif;
          font-weight: 700;
          font-size: 3.2rem;
          color: transparent;
          background: linear-gradient(135deg, #c5a059 0%, #f1d38e 25%, #b38b47 50%, #f1d38e 75%, #c5a059 100%);
          background-clip: text;
          -webkit-background-clip: text;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.8));
          line-height: 1;
          margin-bottom: 2px;
        }

        .full-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          font-weight: 400;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          display: block;
          color: #d4af37;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }

        .chapter-label, .current-story-name {
          white-space: nowrap;
          transition: all 0.5s ease;
        }

        @media (max-width: 900px) {
          .header-side-ornament { display: none; }
          .header-body { justify-content: center; }
        }
      `}</style>
    </header>
  );
};

export default Header;
