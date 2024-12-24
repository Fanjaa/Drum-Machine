import React, { useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

function DrumPad({ clip, playSound, volume }) {
  const audioRef = useRef(null);

  const handleClick = () => {
    audioRef.current.play();
    playSound(clip.label);
  };

  const handleKeyDown = useCallback((event) => {
    if (event.key.toUpperCase() === clip.id) {
      audioRef.current.play();
      playSound(clip.label);
    }
  }, [clip.id, clip.label, playSound]);

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div
      className="drum-pad"
      id={clip.id}
      onClick={handleClick}
    >
      {clip.id}
      <audio className="clip" id={clip.id} src={clip.src} ref={audioRef}></audio>
    </div>
  );
}

DrumPad.propTypes = {
  clip: PropTypes.shape({
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  playSound: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired,
};

export default DrumPad;
