import React, { useState } from 'react';
import ImageMapper from 'react-image-mapper';
import './assets/css/App.css';

const screen = '/assets/imgs/screen.png';
const activeScreen = '/assets/imgs/tv-active.gif';
const Whitepaper = '/assets/imgs/Whitepaper.png';
const BrainStatic = '/assets/imgs/BrainStatic.png';
const FAQ = '/assets/imgs/FAQ.png';
const bot = '/assets/imgs/bot.gif';
const machine = '/assets/imgs/machine.png';
const barrels = '/assets/imgs/Barrels.png';
const activeBrain = '/assets/imgs/brain.gif';
const repairBot = '/assets/imgs/repair_bot.gif';
const barrelActiveImg = '/assets/imgs/barrel_active.gif';

const screen_ = {
  name: 'screen',
  areas: [
    { id: '1', shape: 'rect', coords: [200, 40, 550, 350], preFillColor: 'rgba(255,0,0,0.3)' },
  ],
};

const Whitepaper_ = {
  name: 'Whitepaper',
  areas: [
    { id: '2', shape: 'rect', coords: [40, 70, 280, 180], preFillColor: 'rgba(255,0,0,0.3)' },
  ],
};

const BrainStatic_ = {
  name: 'BrainStatic',
  areas: [
    { id: '3', shape: 'rect', coords: [220, 130, 530, 280], preFillColor: 'rgba(255,0,0,0.3)' },
  ],
};

const FAQ_ = {
  name: 'FAQ',
  areas: [
    {
      id: '4',
      shape: 'rect',
      coords: [500, 300, 1000, 600], // Adjusted coordinates for bottom-right square
      preFillColor: 'rgba(255,0,0,0.3)' // Semi-transparent red fill
    },
  ],
};

const bot_ = {
  name: 'bot',
  areas: [
    { id: '5', shape: 'rect', coords: [590, 230, 680, 100], preFillColor: 'rgba(255,0,0,0.3)' },
    { id: '6', shape: 'rect', coords: [480, 230, 590, 100], preFillColor: 'rgba(255,0,0,0.3)' },
    { id: '7', shape: 'rect', coords: [420, 230, 480, 100], preFillColor: 'rgba(255,0,0,0.3)' },
  ],
};

const activeBot_ = {
  name: 'bot',
  areas: [
    // { id: '5', shape: 'rect', coords: [590, 230, 680, 100], preFillColor: 'rgba(255,0,0,0.3)' },
    // { id: '6', shape: 'rect', coords: [480, 230, 590, 100], preFillColor: 'rgba(255,0,0,0.3)' },
    // { id: '7', shape: 'rect', coords: [420, 230, 480, 100], preFillColor: 'rgba(255,0,0,0.3)' },
  ],
};

const barrels_ = {
  name: 'barrels',
  areas: [
    {
      id: '8',
      shape: 'rect',
      coords: [150, 150, 280, 250], // Adjusted coordinates for bottom-right square
      preFillColor: 'rgba(255,0,0,0.3)' // Semi-transparent red fill
    },
  ],
};

export default function ClickableImage() {

  const handleClick2 = (area) => {
    alert(`You clicked on area ${area.id}`);
  };

  const handleClick3 = (area) => {
    alert(`You clicked on area ${area.id}`);
  };

  const handleClick4 = (area) => {
    alert(`You clicked on area ${area.id}`);
  };

  const [screenState, setScreenState] = useState(false);
  const [screenCheck, setScreenCheck] = useState(false);

  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);

  const handleScreen = (area) => {
    // alert(`You clicked on area ${area.id}`);
    setScreenCheck(!screenCheck)
    setLeft(!left)
  };

  const handleScreenOver = (event) => {
    // if (!screenCheck) {
    // }
    if (event === 'left') {
      setLeft(true)
    } else {
      setRight(true)
    }
    console.log('handleScreen Over');
  }

  const handleScreenLeave = (event) => {
    // if (!screenCheck) {
    // }
    if (event === 'left') {
      setLeft(false)
    } else {
      setRight(false)
    }
    console.log('handleScreen leave');
  }

  const handleCheck = () => {
    if (screenCheck === true) {
      setScreenCheck(false)
    }
  }

  const [brain, setBrain] = useState(false);
  const handleWhitepaper = (area) => {
    setBrain(!brain)
  };

  const handleBack = () => {
    setBrain(false)
  }

  const [barrel, setBarrel] = useState(false);
  const handleBarrels = (area) => {
    setBarrel(!barrel);
    // alert(`You clicked on area ${area.id}`);
  };

  return (
    <>
      <div className={`container ${left ? 'container_hover' : right ? 'container_hover' : ''}`}>
        <div className={`layout ${left ? 'container_hover' : right ? 'container_hover' : ''}`}>
          <div style={brain ? { width: '100vw', height: '100vh', position: 'absolute', top: '0px', right: '0px', backgroundColor: '#000000a6' } : {}} >
            <div style={brain ? { display: 'none' } : barrel ? {display: 'none'} : {}} className={`screen ${left ? 'hover-zoom upper-left' : right ? 'hover-zoom upper-right' : ''}`} onMouseOver={() => handleScreenOver('left')} onMouseLeave={() => handleScreenLeave('left')}>
              <ImageMapper
                src={screenCheck ? activeScreen : screen}
                map={screen_}
                onClick={handleScreen}
              />
              {
                screenCheck === true ?
                  <div className='frame-all' onClick={handleCheck}>
                    <div className="frame-11">
                      <div className="group-3">
                        <div className="frame-18">
                          <div className="frame-17">
                            <div className="tokenomics">Tokenomics</div>
                          </div>
                          <div className="frame-16">
                            <div className="group-2">
                              <div className="rectangle-7"></div>
                              <div className="rectangle-8"></div>
                              <img className="group-1" src="/assets/imgs/Group.png" />
                            </div>
                          </div>
                        </div>
                        <img className="vector-1" src="vector-10.svg" />
                        <div
                          className="step-1"
                        >
                          <span>
                            <span
                              className="step-1-span"
                            >
                              Step 1: Create A Wallet
                            </span>
                            <span
                              className="step-1-span2"
                            >
                              <br />
                              Visit phantom.app and follow the simple steps to create a new account
                              with the Phantom app or browser extension.
                              <br />
                              <br />
                            </span>
                            <span
                              className="step-1-span3"
                            >
                              Step 2: Get Some $SOL
                            </span>
                            <span
                              className="step-1-span4"
                            >
                              <br />
                              Tap the BUY button in the app to purchase Solana, or deposit $SOL to
                              your Phantom wallet from the crypto exchange of your choice.
                              <br />
                              <br />
                            </span>
                            <span
                              className="step-1-span5"
                            >
                              Step 3: Swap $SOL For $BRAIN
                            </span>
                            <span
                              className="step-1-span6"
                            >
                              <br />
                              Tap the SWAP icon in your Phantom wallet and paste the $AI token
                              address. Swap your $SOL for $AI.
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  :
                  <></>
              }
            </div>
            <div className='whitepaper' style={barrel ? {display: 'none'} : {}}>
              <ImageMapper
                src={brain ? activeBrain : Whitepaper}
                map={Whitepaper_}
                onClick={handleWhitepaper}
                width={brain ? 500 : 460}
              />
            </div>
            <div style={brain ? { display: 'none' } : barrel ? {display: 'none'} : {}} className={`brain_static ${left ? 'hover-zoom upper-left' : right ? 'hover-zoom upper-right' : ''}`} onMouseOver={() => handleScreenOver('right')} onMouseLeave={() => handleScreenLeave('right')}>
              <ImageMapper
                src={BrainStatic}
                map={BrainStatic_}
                onClick={handleClick2}
              />
            </div>
            <div style={brain ? { display: 'none' } : barrel ? {display: 'none'} : {}} className={`faqs ${left ? 'hover-zoom upper-left' : right ? 'hover-zoom upper-right' : ''}`} onMouseOver={() => handleScreenOver('right')} onMouseLeave={() => handleScreenLeave('right')}>
              <ImageMapper
                src={FAQ}
                map={FAQ_}
                onClick={handleClick3}
              />
            </div>
            <div className='bot' onMouseOver={() => handleScreenOver('left')} onMouseLeave={() => handleScreenLeave('left')}>
              <ImageMapper
                src={brain ? repairBot : barrel ? repairBot : bot}
                map={brain ? activeBot_ : barrel ? activeBot_ : bot_}
                onClick={handleClick4}
                width={brain ? 1200 : 700}
              />
            </div>
            <div style={brain ? { display: 'none' } : barrel ? {display: 'none'} : {}} className={`machine ${left ? 'hover-zoom upper-left' : right ? 'hover-zoom upper-right' : ''}`} onMouseOver={() => handleScreenOver('left')} onMouseLeave={() => handleScreenLeave('left')}>
              <ImageMapper
                src={machine}
              />
            </div>
            <div style={brain ? { display: 'none' } : {}} className={`barrels ${left ? 'hover-zoom upper-left' : right ? 'hover-zoom upper-right' : ''}`} onMouseOver={() => handleScreenOver('left')} onMouseLeave={() => handleScreenLeave('left')}>
              <ImageMapper
                src={barrel ? barrelActiveImg :barrels}
                map={barrels_}
                onClick={handleBarrels}
              />
            </div>
            {
              brain ?
                <div style={{position: 'absolute', bottom: 0, right: 70, cursor: 'pointer'}}>
                  <h3 style={{color: '#F6FF90', fontSize: 70, fontStyle: 'italic', fontWeight: 'normal', position: 'relative', bottom: 350, right: 136}}>
                  UNDER <br/>
                  CONSTRUCTION
                  </h3>
                  <h4 style={{color: '#81D3F1' , fontSize: 30, textAlign: 'end'}} onClick={handleBack}>
                    BACK
                  </h4>
                </div>
                :
                <>
                </>
            }
          </div>
        </div>
      </div>
    </>
  );
}