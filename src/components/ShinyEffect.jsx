import React from 'react';

const ShinyEffect = ({left,right,top,size=500}) => {

  const positionstyles = {
    top:`${top}px`,
    width:`${size}px`,
    height:`${size}px`,
    zindex: -1

  }

  if(left!==undefined){
    positionstyles.left = `${left}px`;
  }
  
  if(right!==undefined){
    positionstyles.right = `${right}px`;
  }
  return (
    <div className='shiny-effect' style={positionstyles}>
    
    </div>
  );
}

export default ShinyEffect;
