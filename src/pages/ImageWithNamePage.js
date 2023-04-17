import React from 'react';
import PropTypes from 'prop-types';

const ImageWithName = ({ src, name }) => {

  return (
    <div style={{ position: 'relative' }}>
      <img src={src} alt="" style={{  flexBasis: '33%', margin: '5px 20px',  width: '450px', height: '450px', opacity : 0.6,}} />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '60px',
          color: 'white',
          textShadow: '2px 2px 4px black',
          textAlign: 'center',
          width: '100%',
        }}
      >
        {name}
      </div>
    </div>
  );
};

ImageWithName.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ImageWithName;
