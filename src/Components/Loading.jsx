import React from 'react';
import loadingGif from '../Images/loading-gif.gif'

const Loading = () => {
  return( <div className='form-loading' >
      <img width="170px" src={loadingGif}/>
  </div>)
};

export default Loading;
