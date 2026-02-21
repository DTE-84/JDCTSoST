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
        <div className="header-side left-side">
          <div className="rule-line short"></div>
          <div className="chapter-label">
            {activeIndex === -1 ? "PROLOGUE" : `CHAPTER ${RomanNumerals[activeIndex]}`}
          </div>
        </div>

        {/* Absolute Center Logo Area */}
        <div className="header-center">
          <div className="initials-container">
            <h1 className="initials">JDC</h1>
            <span className="full-name">Devin Cashman</span>
          </div>
        </div>

        {/* Right Side Ornament */}
        <div className="header-side right-side">
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
          background: linear-gradient(180deg, #0e0804 0%, #1a1007 50%, #0c0703 100%);
          box-shadow: 0 10px 40px rgba(0,0,0,0.8);
        }

        .header-frame::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("https://www.transparenttextures.com/patterns/dark-matter.png");
          opacity: 0.1;
          z-index: 0;
          pointer-events: none;
        }

        .rail { position: relative; z-index: 5; height: 4px; width: 100%; }
        .rail-top { 
          background: linear-gradient(90deg, #100a02 0%, #d4af37 50%, #100a02 100%); 
          opacity: 0.6;
        }
        .rail-bottom { 
          background: linear-gradient(90deg, #100a02 0%, #d4af37 50%, #100a02 100%); 
          opacity: 0.3;
        }

        .header-body {
          position: relative;
          z-index: 3;
          padding: clamp(10px, 2vh, 20px) 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: clamp(80px, 12vh, 120px);
        }

        .header-side {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 20px;
          font-family: 'Cinzel', serif;
          font-size: 0.6rem;
          color: #d4af37;
          letter-spacing: 0.3em;
          opacity: 0.6;
          width: 25%;
          transition: opacity 0.5s ease;
        }

        .left-side { left: 40px; justify-content: flex-start; }
        .right-side { right: 40px; justify-content: flex-end; text-align: right; }

        .rule-line.short {
          width: 40px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.4), transparent);
        }

        .header-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          z-index: 4;
        }

        .initials {
          font-family: 'Cinzel', serif;
          font-weight: 700;
          font-size: clamp(2rem, 5vw, 3.2rem);
          color: transparent;
          background: linear-gradient(135deg, #c5a059 0%, #f1d38e 50%, #c5a059 100%);
          background-clip: text;
          -webkit-background-clip: text;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
          line-height: 1;
          margin-bottom: 2px;
          letter-spacing: 0.1em;
        }

        .full-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(0.8rem, 2vw, 1.2rem);
          font-weight: 400;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          display: block;
          color: #d4af37;
          opacity: 0.9;
        }

        .chapter-label, .current-story-name {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-transform: uppercase;
        }

        @media (max-width: 1100px) {
          .header-side { opacity: 0; pointer-events: none; }
        }
      `}</style>
    </header>
  );
};

export default Header;
