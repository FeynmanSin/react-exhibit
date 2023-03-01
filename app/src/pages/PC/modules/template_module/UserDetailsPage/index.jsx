import React, { useRef, useEffect, useLayoutEffect, useState } from 'react';

import './index.scss';




const UserDetailsPage = () => {
  const [mouseProsition, setMouseProsition] = useState('');
  const [glassPosition, setGlassPosition] = useState({});
  const [showGlass, setShowGlass] = useState(false)
  useEffect(() => {
  }, [])

  const onMouseEnter = () => {
    setShowGlass(true);
  }

  const onMouseLeave = () => {
    setShowGlass(false);
  }

  const onMouseMove = (e) => {
    let { offsetX, offsetY } = e.nativeEvent;
    setGlassPosition({ top: offsetY, left: offsetX })
  }

  return (
    <div id="content">
      <div className='content__left' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onMouseMove={onMouseMove}>
        {showGlass && <div className="glass" style={glassPosition}></div>}

      </div>
      <div className='content__main'></div>
      <div className='content__right'></div>
    </div>
  );
}

export default UserDetailsPage;
